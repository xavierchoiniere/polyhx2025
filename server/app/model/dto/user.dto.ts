import { IsString, IsEmail, IsBoolean, IsNumber } from 'class-validator';

export class UserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsBoolean()
  isScientist: boolean;

  @IsNumber()
  level: number;
}