import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { RoomRoutingModule } from './room-routing.module';
import { MaterialModule } from '../shared/material/material.module';

import { RoomComponent } from './room.component';
import { SetupComponent } from './setup/setup.component';
import { StreamComponent } from './stream/stream.component';
import { HangupComponent } from './hangup/hangup.component';


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
    
    ReactiveFormsModule,
  ]
})
export class RoomModule { }
