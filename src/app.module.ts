// src/app.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './database.module';
import { CourseModule } from './course/course.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    DatabaseModule,
    CourseModule,
    UserModule
    // other modules
  ],
})
export class AppModule {}
