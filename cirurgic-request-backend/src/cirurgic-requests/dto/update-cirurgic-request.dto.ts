import { PartialType } from '@nestjs/mapped-types';
import { CreateCirurgicRequestDto } from './create-cirurgic-request.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCirurgicRequestDto extends PartialType(
  CreateCirurgicRequestDto,
) {
  @ApiProperty({
    type: String,
    example: 'Dr. House',
  })
  doctor: string;

  @ApiProperty({
    type: String,
    example: 'John Doe',
  })
  patient: string;

  @ApiProperty({
    type: Date,
    example: new Date().toISOString(),
  })
  surgeryDate: string;

  @ApiProperty({
    type: String,
    example: 'General notes',
  })
  generalNotes: string;

  @ApiProperty({
    type: String,
    example: 'Room 1',
  })
  room: string;

  @ApiProperty({
    type: String,
    example: 'Procedures 1',
  })
  procedures: string;

  @ApiProperty({
    type: String,
    example: 'Hospital 1',
  })
  hospital: string;
}
