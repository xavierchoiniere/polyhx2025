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

  @IsArray()  // Ensuring 'data' is an array
  @IsNotEmpty()  // This ensures the array is not empty
  @IsObject({ each: true })  // Each item in the array should be a valid FishDto object
  data: FishDto[];
}
