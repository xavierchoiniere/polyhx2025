import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "../model/schema/user.schema";
import { UserDto } from "../model/dto/user.dto";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(createUserDto: UserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.userModel.findOne({ username, password }).exec();
    return user ? user : null;
  }

  async getUserByUsername(username: string): Promise<User> {
    return this.userModel.findOne({ username }).exec();
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async updateUserLevel(username: string, level: number): Promise<User> {
    return this.userModel
      .findOneAndUpdate({ username }, { level }, { new: true })
      .exec();
  }
}
