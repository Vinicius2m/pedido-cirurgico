import { ApiResponseProperty } from '@nestjs/swagger';

export class CirurgicRequestDto {
  @ApiResponseProperty({
    type: Number,
    example: 1,
  })
  id: number;

  @ApiResponseProperty({
    type: String,
    example: 'Dr. House',
  })
  doctor: string;

  @ApiResponseProperty({
    type: String,
    example: 'John Doe',
  })
  patient: string;

  @ApiResponseProperty({
    type: Date,
    example: new Date().toISOString(),
  })
  surgeryDate: Date;

  @ApiResponseProperty({
    type: String,
    example: 'General notes',
  })
  generalNotes: string;

  @ApiResponseProperty({
    type: String,
    example: 'Room 1',
  })
  room: string;

  @ApiResponseProperty({
    type: String,
    example: 'Procedures 1',
  })
  procedures: string;

  @ApiResponseProperty({
    type: String,
    example: 'Hospital 1',
  })
  hospital: string;
}
