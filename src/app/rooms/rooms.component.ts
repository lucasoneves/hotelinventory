import { Component } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.sass']
})
export class RoomsComponent {
  hotelName = "Hilton Hotel";
  numberOfRooms = 20;
  hideRooms = false;
  toggle() {
    this.hideRooms = !this.hideRooms
  }
  rooms: Room = {
    id: 1,
    totalRooms: 20,
    available: 10,
    bookedRooms: 10
  }
}
