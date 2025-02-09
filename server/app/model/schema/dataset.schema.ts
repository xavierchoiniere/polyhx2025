import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Fish } from "./fish.schema";
import { Document } from "mongoose";

export type DatasetDocument = Dataset & Document;

@Schema()
export class Dataset {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  data: Fish[];
}

export const DatasetSchema = SchemaFactory.createForClass(Dataset);
