import { Fish } from './fish';

export interface Dataset {
    _id?: string;
    username: string;
    title: string;
    description: string;
    data: Fish[];
}