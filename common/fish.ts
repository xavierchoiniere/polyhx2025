export interface Fish {
    _id?: string;
    species?: string;
    weight?: number;
    length?: number;
    location: Location;
    imageUrl: string;  
    date: Date;  
}

export interface Location {
    longitude: number;
    latitude: number;
}