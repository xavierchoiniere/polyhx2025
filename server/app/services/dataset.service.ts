import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dataset, DatasetDocument } from '../model/schema/dataset.schema';
import { DatasetDto } from '../model/dto/dataset.dto';

@Injectable()
export class DatasetService {
  constructor(@InjectModel(Dataset.name) private datasetModel: Model<DatasetDocument>) {}

  async saveDataset(datasetDto: DatasetDto): Promise<Dataset> {
    const createdDataset = new this.datasetModel({
      ...datasetDto,
      createdAt: new Date(),
    });
    return createdDataset.save();
  }

  async getDatasetsByUsername(username: string): Promise<Dataset[]> {
    return this.datasetModel.find({ username }).exec();
  }
}