import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

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
