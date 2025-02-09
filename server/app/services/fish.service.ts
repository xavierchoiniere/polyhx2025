import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Fish, FishDocument } from "../model/schema/fish.schema";
import { FishDto } from "../model/dto/fish.dto";

@Injectable()
export class FishService {
  constructor(@InjectModel(Fish.name) private fishModel: Model<FishDocument>) {}

  async createFish(createFishDto: FishDto): Promise<Fish> {
    const createdFish = new this.fishModel(createFishDto);
    return createdFish.save();
  }

  async searchFish(
    species?: string,
    longitude?: number,
    latitude?: number,
    radius?: number,
    date?: Date
  ): Promise<Fish[]> {
    const query: any = {};

    if (species) {
      query.species = species;
    }

    if (longitude && latitude && radius) {
      query.location = {
        $geoWithin: {
          $centerSphere: [[longitude, latitude], radius / 3963.2], // radius in miles
        },
      };
    }

    if (date) {
      query.date = date;
    }

    return this.fishModel.find(query).exec();
  }
}