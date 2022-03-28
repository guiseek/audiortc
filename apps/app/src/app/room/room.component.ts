import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'audiortc-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  ngOnInit(): void {
    console.log('on init');
  }

}
