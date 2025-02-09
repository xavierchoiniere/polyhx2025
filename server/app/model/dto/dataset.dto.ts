import { IsString, IsNotEmpty, IsObject, IsOptional, IsArray } from "class-validator";
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

  @IsArray()
  @IsNotEmpty()
  @IsObject({ each: true })
  data: FishDto[];
}
