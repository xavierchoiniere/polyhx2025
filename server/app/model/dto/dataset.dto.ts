import { IsString, IsNotEmpty, IsObject, IsOptional } from "class-validator";
import { FishDto } from "./fish.dto";

export class DatasetDto {
  @IsOptional()
  @IsString()
  _id?: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
