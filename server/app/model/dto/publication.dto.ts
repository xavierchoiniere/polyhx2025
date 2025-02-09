import { IsString, IsNumber, ValidateNested, IsOptional } from "class-validator";
import { FishDto } from "./fish.dto";

export class PublicationDto {
  @IsOptional()
  @IsString()
  _id: string;

  @IsString()
  username: string;

  @ValidateNested()
  data: FishDto;

  @IsString()
  caption: string;

  @IsOptional()
  @IsNumber()
  likes: number;
}
