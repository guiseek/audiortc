import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SetupGuard } from './guards/setup.guard';

import { RoomComponent } from './room.component';
import { SetupComponent } from './setup/setup.component';
import { HangupComponent } from './hangup/hangup.component';
import { StreamComponent } from './stream/stream.component';

const routes: Routes = [
  {
    path: ':id',
    component: RoomComponent,
    children: [
      { path: '', redirectTo: 'setup', pathMatch: 'full' },
      { path: 'setup', component: SetupComponent },
      { path: 'stream', component: StreamComponent, canActivate: [SetupGuard] },
      { path: 'hangup', component: HangupComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomRoutingModule {}
