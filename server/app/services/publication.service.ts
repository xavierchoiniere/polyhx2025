import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Publication, PublicationDocument } from "../model/schema/publication.schema";
import { PublicationDto } from "../model/dto/publication.dto";
import { FishService } from "./fish.service";

@Injectable()
export class PublicationService {
  constructor(
    @InjectModel(Publication.name)
    private publicationModel: Model<PublicationDocument>,
  ) {}

  async createPublication(
    createPublicationDto: PublicationDto
  ): Promise<Publication> {
    const createdPublication = new this.publicationModel(createPublicationDto);
    return createdPublication.save();
  }

  async getPublicationById(id: string): Promise<Publication> {
    return this.publicationModel.findById(id).exec();
  }

  async getAllPublications(): Promise<Publication[]> {
    return this.publicationModel.find().exec();
  }

  async getPublicationsByUsername(username: string): Promise<Publication[]> {
    return this.publicationModel.find({ username }).exec();
  }

  async updateLikes(id: string, likes: number): Promise<Publication> {
    return this.publicationModel
      .findByIdAndUpdate(id, { likes }, { new: true })
      .exec();
  }
}