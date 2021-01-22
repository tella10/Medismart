export interface Medform {
    id: number;
    accomodation: string;
    alias: string;
    firstName: string;
    lastName: string;
    guestOld: number;
    guestMiddle: number;
    guestChild: number;
    email: string;
    phone: number;
    checkin: Date;
    checkOut: Date;
    equipmentType: string;
    slideOut: boolean;
    requiredService: string;
    pet: boolean;
    comments: string;
}
