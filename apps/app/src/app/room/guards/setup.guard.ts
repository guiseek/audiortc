import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SetupGuard implements CanActivate {
  constructor(private _router: Router) {}

  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    const devices = await navigator.mediaDevices.enumerateDevices();

    // filter on audio inputs, and map to query object
    const queries = devices
      .filter(({ kind }) => kind === 'audioinput')
      .map(({ deviceId }) => this._mapToQuery(deviceId));

    const promises = queries.map((queryObj) =>
      navigator.permissions.query(queryObj)
    );

    try {
      const results = await Promise.all(promises);
      const granted = results.every(({ state }) => state === 'granted');

      if (!granted) {
        const { id } = route.parent?.params ?? {};
        const path = ['/', 'room', id, 'setup'];

        this._router.navigate(path);
      }

      // log for debug: the state of each microphone
      results.forEach(({ state }) => console.log('Microphone', state));

      return granted;
    } catch (error) {
      console.error(error);
    }

    return false;
  }

  private _mapToQuery(deviceId: string) {
    return { name: 'microphone' as PermissionName, deviceId };
  }
}
