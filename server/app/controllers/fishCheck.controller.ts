import { Body, Controller, Post } from '@nestjs/common';
import { fishCheck } from '../services/fishCheck.service';

@Controller('ai')
export class OpenaiController {
  constructor(private readonly aiService: fishCheck) {}

  @Post()
  async getResponse(@Body() longitude: number, latitude: number): Promise<string> {
    if (!prompt) {
      throw new Error('Prompt query parameter is required');
    }
    return this.aiService.getOpenAIResponse(longitude, latitude);
  }
}
