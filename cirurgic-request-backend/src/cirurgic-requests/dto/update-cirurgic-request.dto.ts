import { PartialType } from '@nestjs/mapped-types';
import { CreateCirurgicRequestDto } from './create-cirurgic-request.dto';

export class UpdateCirurgicRequestDto extends PartialType(CreateCirurgicRequestDto) {}
