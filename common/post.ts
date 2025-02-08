import { fishDataLog } from "./fishDataLog";

export interface post{
    data: fishDataLog;
    user: String;
    caption: string;
    likes: number; 
}