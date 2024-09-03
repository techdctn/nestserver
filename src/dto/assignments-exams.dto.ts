import { IsArray, IsDateString, IsNotEmpty, IsString, IsOptional } from 'class-validator';

// DTO for an assignment
export class AssignmentDto {
  @IsString()
  @IsNotEmpty()
  subjectName: string;

  @IsDateString()
  dueDate: string; // Due date in ISO 8601 format

  @IsOptional()
  @IsString()
  result?: string; // Result can be optional

  @IsString()
  @IsNotEmpty()
  shareLink: string; // Link to the assignment
}

// DTO for an exam
export class ExamDto {
  @IsString()
  @IsNotEmpty()
  examName: string;

  @IsDateString()
  date: string; // Exam date in ISO 8601 format

  @IsString()
  @IsNotEmpty()
  time: string; // Time of the exam in HH:mm format
}

// DTO for results
export class ResultDto {
  @IsString()
  @IsNotEmpty()
  examName: string; // Name of the exam

  @IsString()
  @IsNotEmpty()
  result: string; // Result of the exam
}

// Main DTO for assignments and exams
export class AssignmentsExamsDto {
  @IsArray()
  assignments: AssignmentDto[];

  @IsArray()
  exams: ExamDto[];

  @IsArray()
  results: ResultDto[];
}