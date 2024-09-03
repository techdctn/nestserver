// src/database.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI), // Simplified connection
  ],
})
export class DatabaseModule {}
