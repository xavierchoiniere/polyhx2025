import { Fish } from "./fish";

export interface Publication {
  username: string;
  data: Fish;
  caption: string;
  likes: number;
}