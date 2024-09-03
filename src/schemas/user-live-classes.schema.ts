import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { LiveClassSchema, LiveClass } from './live-class.schema';

@Schema()
export class UserLiveClasses extends Document {
  @Prop({ type: [LiveClassSchema], default: [] })
  previous: LiveClass[];

  @Prop({ type: [LiveClassSchema], default: [] })
  current: LiveClass[];

  @Prop({ type: [LiveClassSchema], default: [] })
  upcoming: LiveClass[];
}

export const UserLiveClassesSchema = SchemaFactory.createForClass(UserLiveClasses);
