// src/course/course.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from '../schemas/course.schema';
import { CreateCourseDto } from '../dto/create-course.dto';

@Injectable()
export class CourseService {
  constructor(@InjectModel('Course') private courseModel: Model<Course>) {} // Use string 'Course' for the model name

  async createCourse(createCourseDto: CreateCourseDto): Promise<Course> {
    const newCourse = new this.courseModel(createCourseDto);
    return newCourse.save();
  }

  async getCourses(): Promise<Course[]> {
    return this.courseModel.find().exec();
  }
}
