import { IsOptional, IsString, IsNumber, IsUrl, IsLatLong, IsLatitude, IsLongitude } from "class-validator";
import { isFloat64Array } from "util/types";

export class FishDto {
  @IsOptional()
  @IsString()
  _id: string;

  @IsOptional()
  @IsString()
  species?: string;

  @IsOptional()
  @IsString()
  weight?: number;

  @IsOptional()
  @IsString()
  length?: number;

  @IsLongitude()
  longitude: number;

  @IsLatitude()
  latitude: number;

  @IsString()
  imageUrl: string;

  @IsString()
  date: Date;
}