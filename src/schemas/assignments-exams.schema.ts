import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Schema for an assignment
@Schema()
export class Assignment extends Document {
  @Prop({ required: true })
  subjectName: string;

  @Prop({ required: true })
  dueDate: Date; // Store as Date

  @Prop()
  result?: string; // Optional result field

  @Prop({ required: true })
  shareLink: string;
}

export const AssignmentSchema = SchemaFactory.createForClass(Assignment);

// Schema for an exam
@Schema()
export class Exam extends Document {
  @Prop({ required: true })
  examName: string;

  @Prop({ required: true })
  date: Date; // Store as Date

  @Prop({ required: true })
  time: string; // Time of the exam
}

export const ExamSchema = SchemaFactory.createForClass(Exam);

// Schema for results
@Schema()
export class Result extends Document {
  @Prop({ required: true })
  examName: string; // Name of the exam

  @Prop({ required: true })
  result: string; // Result of the exam
}

export const ResultSchema = SchemaFactory.createForClass(Result);

// Main schema for assignments and exams
@Schema()
export class AssignmentsExams extends Document {
  @Prop({ type: [AssignmentSchema], default: [] })
  assignments: Assignment[];

  @Prop({ type: [ExamSchema], default: [] })
  exams: Exam[];

  @Prop({ type: [ResultSchema], default: [] })
  results: Result[];
}

export const AssignmentsExamsSchema = SchemaFactory.createForClass(AssignmentsExams);
