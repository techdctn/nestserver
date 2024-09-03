import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class LiveClass extends Document {
  @Prop({ required: true })
  educator: string;

  @Prop({ required: true })
  language: string;

  @Prop({ required: true })
  level: string;

  @Prop({ required: true })
  liveClassName: string;

  @Prop({ required: true })
  startingTime: Date; // Use Date for better handling of time
}

export const LiveClassSchema = SchemaFactory.createForClass(LiveClass);
