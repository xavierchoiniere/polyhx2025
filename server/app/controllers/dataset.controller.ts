import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { DatasetDto } from '../model/dto/dataset.dto';
import { Dataset } from '../model/schema/dataset.schema';
import { DatasetService } from '../services/dataset.service';

@Controller('datasets')
export class DatasetController {
  constructor(private readonly datasetService: DatasetService) {}

  @Post()
  async saveDataset(@Body() datasetDto: DatasetDto): Promise<Dataset> {
    return this.datasetService.saveDataset(datasetDto);
  }

  @Get('/:username')
  async getDatasetsByUsername(@Param('username') username: string): Promise<Dataset[]> {
    return this.datasetService.getDatasetsByUsername(username);
  }
}