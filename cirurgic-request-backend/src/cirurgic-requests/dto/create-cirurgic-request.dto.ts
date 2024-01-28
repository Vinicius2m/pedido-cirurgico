import { IsNotEmpty, IsString, IsDateString, MaxLength } from 'class-validator';

export class CreateCirurgicRequestDto {
  @IsNotEmpty()
  @IsString()
  doctor: string;

  @IsNotEmpty()
  @IsString()
  patient: string;

  @IsNotEmpty()
  @IsDateString()
  surgeryDate: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  generalNotes: string;

  @IsNotEmpty()
  @IsString()
  room: string;

  @IsNotEmpty()
  @IsString()
  procedures: string;

  @IsNotEmpty()
  @IsString()
  hospital: string;
}
