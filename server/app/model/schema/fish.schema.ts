import { PROPERTY_DEPS_METADATA } from '@nestjs/common/constants';
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

  @Prop()
  longitude: number;

  @Prop()
  latitude: number;

  @Prop()
  imageUrl: string;

  @Prop()
  date: Date;
}

export const FishSchema = SchemaFactory.createForClass(Fish);