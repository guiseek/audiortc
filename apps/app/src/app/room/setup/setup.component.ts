import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'audiortc-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
})
export class SetupComponent implements OnInit {
  private _inputs = new BehaviorSubject<MediaDeviceInfo[]>([]);
  readonly inputs$ = this._inputs.asObservable();

  private _outputs = new BehaviorSubject<MediaDeviceInfo[]>([]);
  readonly outputs$ = this._outputs.asObservable();

  form = new FormGroup({
    input: new FormControl('default', [Validators.required]),
    output: new FormControl('default', [Validators.required]),
  });

  constructor(private _router: Router, readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    navigator.mediaDevices.enumerateDevices().then((devices) => {

      const inputs = devices.filter((device) => device.kind === 'audioinput');
      const outputs = devices.filter((device) => device.kind === 'audiooutput');

      if (inputs.length < 2 && outputs.length < 2) {
        this._router.navigate(['..', 'stream'], { relativeTo: this.route });
      }

      this._inputs.next(inputs);
      this._outputs.next(outputs);

      if (inputs.length <= 1) {
        const inputControl = this.form.get('input');
        this.changeToDefault(inputs, inputControl);
      }

      if (outputs.length <= 1) {
        const outputControl = this.form.get('output');
        this.changeToDefault(outputs, outputControl);
      }
    });

    const item = localStorage.getItem('setup');
    const value = JSON.parse(item ?? 'null');

    if (value !== null) {
      this.form.patchValue(value);
    }
  }

  changeToDefault(devices: MediaDeviceInfo[], control: AbstractControl | null) {
    const { deviceId = 'default' } = devices.shift() ?? {};
    console.log(deviceId);
    
    if (control) control.setValue(deviceId);
  }

  onSubmit() {
    if (this.form.valid) {
      const { value } = this.form;

      const setup = JSON.stringify(value);
      localStorage.setItem('setup', setup);

      this._router.navigate(['..', 'stream']);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
