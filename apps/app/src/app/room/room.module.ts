import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { SetupComponent } from './setup/setup.component';
import { StreamComponent } from './stream/stream.component';
import { HangupComponent } from './hangup/hangup.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    RoomComponent,
    SetupComponent,
    StreamComponent,
    HangupComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RoomRoutingModule,
  ]
})
export class RoomModule { }
