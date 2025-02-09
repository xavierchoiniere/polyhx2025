import { IsString, IsNotEmpty, IsObject } from "class-validator";
import { FishDto } from "./fish.dto";

export class DatasetDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsObject()
  @IsNotEmpty()
  data: FishDto[];
}
