import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FishDocument = Fish & Document;

@Schema()
export class Fish {
  @Prop()
  species?: string;

  @Prop()
  weight?: number;

  @Prop()
  length?: number;

  @Prop({ type: { longitude: Number, latitude: Number }, index: '2dsphere' })
  location: {
    longitude: number;
    latitude: number;
  };

  @Prop()
  imageUrl: string;

  @Prop()
  date: Date;
}

export const FishSchema = SchemaFactory.createForClass(Fish);