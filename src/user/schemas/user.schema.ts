// src/user/schemas/user.schema.ts
import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  // Add more fields as needed
});

export interface User extends Document {
  id: string;
  username: string;
  email: string;
  password: string;
}
