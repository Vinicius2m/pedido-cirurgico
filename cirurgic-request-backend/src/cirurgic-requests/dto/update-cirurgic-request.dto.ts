import { PartialType } from '@nestjs/mapped-types';
import { CreateCirurgicRequestDto } from './create-cirurgic-request.dto';
import { IsOptional, IsString, IsDateString } from 'class-validator';

export class UpdateCirurgicRequestDto extends PartialType(
  CreateCirurgicRequestDto,
) {
  @IsOptional()
  @IsString()
  doctor?: string;

  @IsOptional()
  @IsString()
  patient?: string;

  @IsOptional()
  @IsDateString()
  surgeryDate?: string;

  @IsOptional()
  @IsString()
  generalNotes?: string;

  @IsOptional()
  @IsString()
  room?: string;

  @IsOptional()
  @IsString()
  procedures?: string;

  @IsOptional()
  @IsString()
  hospital?: string;
}
