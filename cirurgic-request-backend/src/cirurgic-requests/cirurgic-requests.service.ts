import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCirurgicRequestDto } from './dto/create-cirurgic-request.dto';
import { UpdateCirurgicRequestDto } from './dto/update-cirurgic-request.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CirurgicRequestsService {
  constructor(private prisma: PrismaService) {}

  create(createCirurgicRequestDto: CreateCirurgicRequestDto) {
    return this.prisma.cirurgicRequest.create({
      data: createCirurgicRequestDto,
    });
  }

  findAll() {
    return this.prisma.cirurgicRequest.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.cirurgicRequest.findUniqueOrThrow({
      where: { id },
    });
  }

  update(id: number, updateCirurgicRequestDto: UpdateCirurgicRequestDto) {
    Object.keys(updateCirurgicRequestDto).forEach(
      (key) =>
        (updateCirurgicRequestDto[key] === null ||
          updateCirurgicRequestDto[key] === undefined) &&
        delete updateCirurgicRequestDto[key],
    );

    if (Object.keys(updateCirurgicRequestDto).length === 0) {
      throw new BadRequestException('At least one field must be provided');
    }

    const validFields = [
      'doctor',
      'patient',
      'surgeryDate',
      'procedures',
      'hospital',
      'room',
      'generalNotes',
    ];

    const fields = Object.keys(updateCirurgicRequestDto);

    if (!fields.every((field) => validFields.includes(field))) {
      throw new BadRequestException('Invalid field provided');
    }

    return this.prisma.cirurgicRequest.update({
      where: { id },
      data: updateCirurgicRequestDto,
    });
  }

  remove(id: number) {
    return this.prisma.cirurgicRequest.delete({
      where: { id },
    });
  }
}
