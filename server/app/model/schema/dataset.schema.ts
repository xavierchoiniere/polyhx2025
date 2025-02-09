import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Fish } from './fish.schema';
import { Document } from 'mongoose';

export type DatasetDocument = Dataset & Document;

@Schema()
export class Dataset {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  data: Fish[];

  @Prop({ required: true })
  createdAt: Date;
}

export const DatasetSchema = SchemaFactory.createForClass(Dataset);