import { IsArray, IsString, IsNotEmpty, IsISO8601 } from 'class-validator';

// Class to represent a single live class
export class LiveClassDto {
  @IsString()
  @IsNotEmpty()
  educator: string;

  @IsString()
  @IsNotEmpty()
  language: string;

  @IsString()
  @IsNotEmpty()
  level: string;

  @IsString()
  @IsNotEmpty()
  liveClassName: string;

  @IsISO8601()
  startingTime: string; // ISO 8601 format for date and time
}

// Class to represent user live classes
export class UserLiveClassesDto {
  @IsArray()
  previous: LiveClassDto[];

  @IsArray()
  current: LiveClassDto[];

  @IsArray()
  upcoming: LiveClassDto[];
}
