export interface Fish {
    _id: string;
    species?: string;
    weight?: number;
    length?: number;
    longitude: Float64Array;
    latitude: Float64Array;
    imageUrl: string;  
    date: Date;  
}