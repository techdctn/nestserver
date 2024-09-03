// src/course/dto/create-course.dto.ts

import { IsString, IsArray, IsNotEmpty } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  readonly courseName: string;

  @IsString()
  @IsNotEmpty()
  readonly courseId: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsArray()
  @IsString({ each: true })
  readonly videoUrls: string[];
}
