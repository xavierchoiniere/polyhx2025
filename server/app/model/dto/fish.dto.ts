import { IsOptional, IsString, IsNumber, IsUrl } from "class-validator";

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

  @IsNumber()
  longitude: number;

  @IsNumber()
  latitude: number;

  @IsString()
  imageUrl: string;

  @IsString()
  date: Date;
}