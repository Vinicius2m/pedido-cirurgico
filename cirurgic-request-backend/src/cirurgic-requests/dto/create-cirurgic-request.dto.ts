import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDateString, MaxLength } from 'class-validator';

export class CreateCirurgicRequestDto {
  @ApiProperty({
    type: String,
    example: 'Dr. House',
  })
  @IsNotEmpty()
  @IsString()
  doctor: string;

  @ApiProperty({
    type: String,
    example: 'John Doe',
  })
  @IsNotEmpty()
  @IsString()
  patient: string;

  @ApiProperty({
    type: Date,
    example: new Date().toISOString(),
  })
  @IsNotEmpty()
  @IsDateString()
  surgeryDate: string;

  @ApiProperty({
    type: String,
    example: 'General notes',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  generalNotes: string;

  @ApiProperty({
    type: String,
    example: 'Room 1',
  })
  @IsNotEmpty()
  @IsString()
  room: string;

  @ApiProperty({
    type: String,
    example: 'Procedures 1',
  })
  @IsNotEmpty()
  @IsString()
  procedures: string;

  @ApiProperty({
    type: String,
    example: 'Hospital 1',
  })
  @IsNotEmpty()
  @IsString()
  hospital: string;
}
