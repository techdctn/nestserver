// src/user/dto/create-user.dto.ts
import { IsString, IsEmail , IsArray } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsArray()
  @IsString({ each: true })
  readonly enrolledCourses: string[];


  
}
