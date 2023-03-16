export interface Room {
    id: number,
    available: number,
    bookedRooms: number
    totalRooms: number
}

export interface RoomsList {
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkinTime: Date;
}