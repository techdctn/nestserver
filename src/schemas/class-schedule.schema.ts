import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Class to represent a single schedule
@Schema()
export class Schedule extends Document {
  @Prop({ required: true })
  educator: string;

  @Prop({ required: true })
  time: string; // Time of class in HH:mm format or ISO 8601

  @Prop({ required: true })
  subjectName: string;
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);

// Class to represent a day with schedules
@Schema()
export class Day extends Document {
  @Prop({ required: true })
  dayName: string; // e.g., "Monday"

  @Prop({ type: [ScheduleSchema], default: [] })
  schedules: Schedule[];
}

export const DaySchema = SchemaFactory.createForClass(Day);

// Class to represent a week with days
@Schema()
export class Week extends Document {
  @Prop({ type: [DaySchema], default: [] })
  days: Day[];
}

export const WeekSchema = SchemaFactory.createForClass(Week);

// Class to represent the class schedule
@Schema()
export class ClassSchedule extends Document {
  @Prop({ type: WeekSchema, required: true })
  thisWeek: Week;

  @Prop({ type: WeekSchema, required: true })
  nextWeek: Week;

  @Prop({ type: WeekSchema, required: true })
  previousWeek: Week;
}

export const ClassScheduleSchema = SchemaFactory.createForClass(ClassSchedule);
