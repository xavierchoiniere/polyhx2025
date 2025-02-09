import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class fishCheck {
  constructor(private readonly httpService: HttpService) {}

  async getOpenAIResponse(longitude: number, latitude: number): Promise<string> {
    const url = 'https://api.openai.com/v1/completions'; 

    const headers = {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, 
      'Content-Type': 'application/json',
    };

    const body = {
      model: 'text-davinci-003', 
      prompt: `What are the species of fish near the longitude ${longitude} and latitude ${latitude}
      please give the answer as five fish in json format with this format {species_names:"species_name"}`,
      max_tokens: 100, 
    };

    try {
      const response: AxiosResponse = await firstValueFrom(
        this.httpService.post(url, body, { headers })
      );

      return response.data.choices[0].text.trim(); 
    } catch (error) {
      console.error('Error communicating with OpenAI:', error);
      throw new Error('Unable to fetch data from OpenAI');
    }
  }
}
