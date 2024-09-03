// src/course/schemas/course.schema.ts

import { Schema, Document } from 'mongoose';

export interface Course extends Document {
  courseName: string;
  courseId: string;
  description: string;
  videoUrls: string[];
}

export const CourseSchema = new Schema<Course>({
  courseName: { type: String, required: true },
  courseId: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  videoUrls: { type: [String], required: true },
});
