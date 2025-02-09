import { Controller, Get, Post, Patch, Body, Param, Query } from "@nestjs/common";
import { PublicationService } from "../services/publication.service";
import { PublicationDto } from "../model/dto/publication.dto";
import { Publication } from "../model/schema/publication.schema";
import { FishService } from "@app/services/fish.service";

@Controller('publications')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService, private readonly fishService: FishService) {}

  @Post()
  async addPublication(@Body() createPublicationDto: PublicationDto): Promise<Publication> {
    return this.publicationService.createPublication(createPublicationDto);
  }

  @Get(':id')
  async getPublicationById(@Param('id') id: string): Promise<Publication> {
    return this.publicationService.getPublicationById(id);
  }

  @Get()
  async getAllPublications(): Promise<Publication[]> {
    return this.publicationService.getAllPublications();
  }

  @Get('user/:username')
  async getPublicationsByUsername(@Param('username') username: string): Promise<Publication[]> {
    return this.publicationService.getPublicationsByUsername(username);
  }

  @Patch(':id/likes')
  async updateLikes(@Param('id') id: string, @Body('likes') likes: number): Promise<Publication> {
    return this.publicationService.updateLikes(id, likes);
  }
}