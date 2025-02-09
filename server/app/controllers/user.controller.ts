import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { UserDto } from "../model/dto/user.dto";
import { User } from "../model/schema/user.schema";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':username')
  async getUserByUsername(@Param('username') username: string): Promise<User> {
    return this.userService.getUserByUsername(username);
  }

  @Post('signup')
  async addUser(@Body() createUserDto: UserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Post('login')
  async loginUser(@Body() loginUserDto: { username: string; password: string }): Promise<User | null> {
    return this.userService.validateUser(loginUserDto.username, loginUserDto.password);
  }
}