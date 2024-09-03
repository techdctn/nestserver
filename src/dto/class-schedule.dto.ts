import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

// DTO for a single schedule
export class ScheduleDto {
  @IsString()
  @IsNotEmpty()
  educator: string;

  @IsString()
  @IsNotEmpty()
  time: string; // Time of class in HH:mm format or ISO 8601

  @IsString()
  @IsNotEmpty()
  subjectName: string;
}

// DTO for a day containing schedules
export class DayDto {
  @IsString()
  @IsNotEmpty()
  dayName: string; // e.g., "Monday"

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ScheduleDto)
  schedules: ScheduleDto[];
}

// DTO for a week containing days
export class WeekDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DayDto)
  days: DayDto[];
}

// DTO for the class schedule containing weeks
export class ClassScheduleDto {
  @ValidateNested()
  @Type(() => WeekDto)
  thisWeek: WeekDto;

  @ValidateNested()
  @Type(() => WeekDto)
  nextWeek: WeekDto;

  @ValidateNested()
  @Type(() => WeekDto)
  previousWeek: WeekDto;
}
