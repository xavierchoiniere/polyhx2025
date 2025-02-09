<<<<<<< HEAD:common/fish.ts
export interface Fish {
    _id: string;
=======
export interface fishDataLog{
>>>>>>> 7ac9349ec1dd76f19246fa36e1e03fb7540bf143:common/fishDataLog.ts
    species?: string;
    weight?: number;
    length?: number;
    longitude: Float64Array;
    latitude: Float64Array;
    imageUrl: string;  
    date: Date;  
}