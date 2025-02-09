import { IsOptional, IsString, IsNumber } from "class-validator";
import { isFloat64Array } from "util/types";

export class FishDto {
  @IsOptional()
  @IsString()
  _id: string;

  @IsOptional()
  @IsString()
  species?: string;

  @IsOptional()
  weight?: number;

  @IsOptional()
  length?: number;

  @IsNumber()
  longitude: number;

  @IsNumber()
  latitude: number;

  @IsString()
  imageUrl: string;

  @IsString()
  date: Date;
}