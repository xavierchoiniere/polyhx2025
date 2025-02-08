import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "../model/schema/user.schema";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {
    // this.populateDbWithMockUsers();
  }

  async populateDbWithUsers(
    users: { username: string; email: string; password: string }[]
  ): Promise<void> {
    await this.userModel.insertMany(users);
  }

  private async populateDbWithMockUsers(): Promise<void> {
    await this.populateDbWithUsers([
      {
        username: "john_doe",
        email: "john.doe@example.com",
        password: "password123",
      },
      {
        username: "jane_doe",
        email: "jane.doe@example.com",
        password: "password123",
      },
      {
        username: "alice_smith",
        email: "alice.smith@example.com",
        password: "password123",
      },
      {
        username: "bob_jones",
        email: "bob.jones@example.com",
        password: "password123",
      },
    ]);
  }
}
