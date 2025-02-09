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

  @IsString()
  longitude: number;

  @IsString()
  latitude: number;

  @IsString()
  imageUrl: string;

  @IsString()
  date: Date;
}