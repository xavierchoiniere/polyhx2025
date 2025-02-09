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
    species?: string[],
    longitude?: number,
    latitude?: number,
    radius?: number,
    startDate?: Date,
    endDate?: Date
  ): Promise<Fish[]> {
    const query: any = {};

    if (species && species.length > 0) {
      query.species = { $in: species };
    }

    if (longitude && latitude && radius) {
      query.location = {
        $geoWithin: {
          $centerSphere: [[longitude, latitude], radius / 6378100], // radius in meters
        },
      };
    }

    if (startDate && endDate) {
      query.date = { $gte: startDate, $lte: endDate };
    } else if (startDate) {
      query.date = { $gte: startDate };
    } else if (endDate) {
      query.date = { $lte: endDate };
    }

    return this.fishModel.find(query).exec();
  }
}
