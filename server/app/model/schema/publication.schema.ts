import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Fish } from './fish.schema';

export type PublicationDocument = Publication & Document;

@Schema()
export class Publication {
  @Prop({ required: true })
  username: string;

  @Prop({ type: Fish, required: true })
  data: Fish;

  @Prop({ required: true })
  caption: string;

  @Prop()
  likes?: number;
}

export const PublicationSchema = SchemaFactory.createForClass(Publication);