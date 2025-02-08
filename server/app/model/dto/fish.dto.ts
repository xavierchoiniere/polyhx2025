import { IsOptional, IsString, IsNumber, IsUrl } from "class-validator";

export class FishDto {
  @IsOptional()
  @IsString()
  _id: string;

  @IsOptional()
  @IsString()
  species?: string;

  @IsOptional()
  @IsNumber()
  weight?: number;

  @IsOptional()
  @IsNumber()
  length?: number;

  @IsNumber()
  longitude: number;

  @IsNumber()
  latitude: number;

  @IsUrl()
  imageUrl: string;

  @IsString()
  date: Date;
}