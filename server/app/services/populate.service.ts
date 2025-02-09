import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "../model/schema/user.schema";
import { Fish, FishDocument } from "../model/schema/fish.schema";
import {
  Publication,
  PublicationDocument,
} from "../model/schema/publication.schema";
import { Dataset, DatasetDocument } from "../model/schema/dataset.schema";

@Injectable()
export class PopulateService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Fish.name) private fishModel: Model<FishDocument>,
    @InjectModel(Publication.name)
    private publicationModel: Model<PublicationDocument>,
    @InjectModel(Dataset.name) private datasetModel: Model<DatasetDocument>
  ) {
    this.resetAndPopulateDb();
  }

  async resetAndPopulateDb(): Promise<void> {
    await this.userModel.deleteMany({});
    await this.fishModel.deleteMany({});
    await this.publicationModel.deleteMany({});
    await this.datasetModel.deleteMany({});

    const users: User[] = [
      {
        username: "user1",
        email: "user1@example.com",
        password: "password1",
        isScientist: true,
        level: 1,
      },
      {
        username: "user2",
        email: "user2@example.com",
        password: "password2",
        isScientist: false,
        level: 2,
      },
      {
        username: "user3",
        email: "user3@example.com",
        password: "password3",
        isScientist: false,
        level: 3,
      },
      {
        username: "user4",
        email: "user4@example.com",
        password: "password4",
        isScientist: false,
        level: 4,
      },
      {
        username: "user5",
        email: "user5@example.com",
        password: "password5",
        isScientist: false,
        level: 5,
      },
      {
        username: "user6",
        email: "user6@example.com",
        password: "password6",
        isScientist: false,
        level: 6,
      },
      {
        username: "user7",
        email: "user7@example.com",
        password: "password7",
        isScientist: false,
        level: 7,
      },
      {
        username: "user8",
        email: "user8@example.com",
        password: "password8",
        isScientist: false,
        level: 8,
      },
      {
        username: "user9",
        email: "user9@example.com",
        password: "password9",
        isScientist: false,
        level: 9,
      },
      {
        username: "user10",
        email: "user10@example.com",
        password: "password10",
        isScientist: false,
        level: 10,
      },
    ];

    const fish: Fish[] = [
      {
        species: "species1",
        weight: 1,
        length: 10,
        longitude: -73.935242,
        latitude: 40.73061,
        imageUrl: "http://example.com/fish1.jpg",
        date: new Date(),
      },
      {
        species: "species2",
        weight: 2,
        length: 20,
        longitude: -73.935242,
        latitude: 40.73061,
        imageUrl: "http://example.com/fish2.jpg",
        date: new Date(),
      },
      {
        species: "species3",
        weight: 3,
        length: 30,
        longitude: -73.935242,
        latitude: 40.73061,
        imageUrl: "http://example.com/fish3.jpg",
        date: new Date(),
      },
      {
        species: "species4",
        weight: 4,
        length: 40,
        longitude: -73.935242,
        latitude: 40.73061,
        imageUrl: "http://example.com/fish4.jpg",
        date: new Date(),
      },
      {
        species: "species5",
        weight: 5,
        length: 50,
        longitude: -73.935242,
        latitude: 40.73061,
        imageUrl: "http://example.com/fish5.jpg",
        date: new Date(),
      },
      {
        species: "species6",
        weight: 6,
        length: 60,
        longitude: -73.935242,
        latitude: 40.73061,
        imageUrl: "http://example.com/fish6.jpg",
        date: new Date(),
      },
      {
        species: "species7",
        weight: 7,
        length: 70,
        longitude: -73.935242,
        latitude: 40.73061,
        imageUrl: "http://example.com/fish7.jpg",
        date: new Date(),
      },
      {
        species: "species8",
        weight: 8,
        length: 80,
        longitude: -73.935242,
        latitude: 40.73061,
        imageUrl: "http://example.com/fish8.jpg",
        date: new Date(),
      },
      {
        species: "species9",
        weight: 9,
        length: 90,
        longitude: -73.935242,
        latitude: 40.73061,
        imageUrl: "http://example.com/fish9.jpg",
        date: new Date(),
      },
      {
        species: "species10",
        weight: 10,
        length: 100,
        longitude: -73.935242,
        latitude: 40.73061,
        imageUrl: "http://example.com/fish10.jpg",
        date: new Date(),
      },
    ];

    const publications: Publication[] = [
      { username: "user1", data: fish[0], caption: "Great catch!", likes: 10 },
      { username: "user2", data: fish[1], caption: "Amazing fish!", likes: 20 },
      {
        username: "user3",
        data: fish[2],
        caption: "Look at this beauty!",
        likes: 30,
      },
      {
        username: "user4",
        data: fish[3],
        caption: "Caught this today!",
        likes: 40,
      },
      { username: "user5", data: fish[4], caption: "What a catch!", likes: 50 },
      {
        username: "user6",
        data: fish[5],
        caption: "Proud of this one!",
        likes: 60,
      },
      {
        username: "user7",
        data: fish[6],
        caption: "Check this out!",
        likes: 70,
      },
      {
        username: "user8",
        data: fish[7],
        caption: "Caught this beauty!",
        likes: 80,
      },
      {
        username: "user9",
        data: fish[8],
        caption: "Amazing catch!",
        likes: 90,
      },
      {
        username: "user10",
        data: fish[9],
        caption: "Look at this fish!",
        likes: 100,
      },
    ];

    const datasets: Dataset[] = [
      {
        username: "user1",
        name: "Dataset 1 - Species 1",
        data: fish.filter((f) => f.species === "species1"),
        createdAt: new Date(),
      },
      {
        username: "user1",
        name: "Dataset 2 - Weight > 5",
        data: fish.filter((f) => f.weight > 5),
        createdAt: new Date(),
      },
      {
        username: "user1",
        name: "Dataset 3 - Length < 50",
        data: fish.filter((f) => f.length < 50),
        createdAt: new Date(),
      },
      {
        username: "user1",
        name: "Dataset 4 - Species 2 and 3",
        data: fish.filter(
          (f) => f.species === "species2" || f.species === "species3"
        ),
        createdAt: new Date(),
      },
    ];

    await this.userModel.insertMany(users);
    await this.fishModel.insertMany(fish);
    await this.publicationModel.insertMany(publications);
    await this.datasetModel.insertMany(datasets);
  }
}
