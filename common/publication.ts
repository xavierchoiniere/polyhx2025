import { Fish } from "./fish";

export interface Publication {
  _id?: string;
  username: string;
  data: Fish;
  caption: string;
  likes?: number;
}