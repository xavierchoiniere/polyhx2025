import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "../model/schema/user.schema";

@Controller('users')
export class UserController {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  @Get(':username')
  async getUserByUsername(@Param('username') username: string): Promise<User> {
    return this.userModel.findOne({ username }).exec();
  }

  @Post()
  async addUser(@Body() createUserDto: { name: string; email: string; password: string }): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }
}