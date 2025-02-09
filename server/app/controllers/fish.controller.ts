import { Controller, Get, Post, Body, Query } from "@nestjs/common";
import { FishService } from "../services/fish.service";
import { FishDto } from "../model/dto/fish.dto";
import { Fish } from "../model/schema/fish.schema";

@Controller('fish')
export class FishController {
  constructor(private readonly fishService: FishService) {}

  @Post('create')
  async addFish(@Body() createFishDto: FishDto): Promise<Fish> {
    return this.fishService.createFish(createFishDto);
  }

  @Get('search')
  async searchFish(
    @Query('species') species?: string,
    @Query('longitude') longitude?: number,
    @Query('latitude') latitude?: number,
    @Query('radius') radius?: number,
    @Query('date') date?: Date
  ): Promise<Fish[]> {
    return this.fishService.searchFish(species, longitude, latitude, radius, date);
  }

  
}