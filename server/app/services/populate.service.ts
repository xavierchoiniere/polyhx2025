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

const dirpath = "../../assets/photos";

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
    // await this.userModel.deleteMany({});
    // await this.fishModel.deleteMany({});
    // await this.datasetModel.deleteMany({});

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
        species: "Salmon",
        weight: 1,
        length: 10,
        longitude: -123.3656,
        latitude: 48.4284,
        imageUrl: `${dirpath}/1.jpeg`,
        date: new Date(),
      },
      {
        species: "Trout",
        weight: 2,
        length: 20,
        longitude: -122.4194,
        latitude: 37.7749,
        imageUrl: `${dirpath}/2.jpeg`,
        date: new Date(),
      },
      {
        species: "Bass",
        weight: 3,
        length: 30,
        longitude: -74.006,
        latitude: 40.7128,
        imageUrl: `${dirpath}/3.jpeg`,
        date: new Date(),
      },
      {
        species: "Catfish",
        weight: 4,
        length: 40,
        longitude: -118.2437,
        latitude: 34.0522,
        imageUrl: `${dirpath}/4.jpeg`,
        date: new Date(),
      },
      {
        species: "Pike",
        weight: 5,
        length: 50,
        longitude: -87.6298,
        latitude: 41.8781,
        imageUrl: `${dirpath}/5.jpeg`,
        date: new Date(),
      },
      {
        species: "Perch",
        weight: 6,
        length: 60,
        longitude: -95.3698,
        latitude: 29.7604,
        imageUrl: `${dirpath}/6.jpeg`,
        date: new Date(),
      },
      {
        species: "Walleye",
        weight: 7,
        length: 70,
        longitude: -80.1918,
        latitude: 25.7617,
        imageUrl: `${dirpath}/7.jpeg`,
        date: new Date(),
      },
      {
        species: "Carp",
        weight: 8,
        length: 80,
        longitude: -157.8583,
        latitude: 21.3069,
        imageUrl: `${dirpath}/8.jpeg`,
        date: new Date(),
      },
      {
        species: "Bluegill",
        weight: 9,
        length: 90,
        longitude: -149.9003,
        latitude: 61.2181,
        imageUrl: `${dirpath}/9.jpeg`,
        date: new Date(),
      },
      {
        species: "Crappie",
        weight: 10,
        length: 100,
        longitude: -77.0369,
        latitude: 38.9072,
        imageUrl: `${dirpath}/10.jpeg`,
        date: new Date(),
      },
    ];

    const publications: Publication[] = [
      {
        username: "user1",
        data: fish[0],
        caption: "Great catch!",
        likes: 10,
      },
      {
        username: "user2",
        data: fish[1],
        caption: "Amazing fish!",
        likes: 20,
      },
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
      {
        username: "user5",
        data: fish[4],
        caption: "What a catch!",
        likes: 50,
      },
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
        title: "dataset1",
        description: "description1",
        data: [fish[0], fish[1], fish[2]],
      },
      {
        username: "user1",
        title: "dataset2",
        description: "description2",
        data: [fish[3], fish[4], fish[5]],
      },
      {
        username: "user1",
        title: "dataset3",
        description: "description3",
        data: [fish[6], fish[7], fish[8]],
      },
    ];

    // await this.userModel.insertMany(users);
    // await this.fishModel.insertMany(fish);
    await this.publicationModel.insertMany(publications);
    // await this.datasetModel.insertMany(datasets);
  }
}
