import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Schema for research
@Schema()
export class Research extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string; // Optional description
}

export const ResearchSchema = SchemaFactory.createForClass(Research);

// Schema for projects
@Schema()
export class Project extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string; // Optional description
}

export const ProjectSchema = SchemaFactory.createForClass(Project);

// Schema for conferences
@Schema()
export class Conference extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string; // Optional description
}

export const ConferenceSchema = SchemaFactory.createForClass(Conference);

// Schema for approvals
@Schema()
export class Approval extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string; // Optional description
}

export const ApprovalSchema = SchemaFactory.createForClass(Approval);

// Main schema for teacher information
@Schema()
export class Teacher extends Document {
  @Prop({ required: true })
  teacherId: string; // Unique identifier for the teacher

  @Prop({ type: [String], required: true })
  specialization: string[]; // Array of specializations

  @Prop({ type: [ResearchSchema], default: [] })
  research: Research[];

  @Prop({ type: [ProjectSchema], default: [] })
  projects: Project[];
ppppppppppppp
  @Prop({ type: [ConferenceSchema], default: [] })
  conferences: Conference[];

  @Prop({ type: [ApprovalSchema], default: [] })
  approvals: Approval[];
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
