import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Schema for a single course material
@Schema()
export class CourseMaterial extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  pdfLink: string; // Link to the PDF file

  @Prop({ required: true })
  description: string;
}

export const CourseMaterialSchema = SchemaFactory.createForClass(CourseMaterial);

// Main schema for course materials
@Schema()
export class CourseMaterials extends Document {
  @Prop({ type: [CourseMaterialSchema], default: [] })
  courseMaterials: CourseMaterial[];
}

export const CourseMaterialsSchema = SchemaFactory.createForClass(CourseMaterials);
