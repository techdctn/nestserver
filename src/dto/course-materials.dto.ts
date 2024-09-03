import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

// DTO for a single course material
export class CourseMaterialDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  pdfLink: string; // Link to the PDF file

  @IsString()
  @IsNotEmpty()
  description: string;
}

// Main DTO for course materials
export class CourseMaterialsDto {
  courseMaterials: CourseMaterialDto[];
}
