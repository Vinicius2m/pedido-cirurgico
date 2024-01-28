import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCirurgicRequestDto } from './dto/create-cirurgic-request.dto';
import { UpdateCirurgicRequestDto } from './dto/update-cirurgic-request.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

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

  async findOne(id: number) {
    try {
      return await this.prisma.cirurgicRequest.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`Cirurgic request with ID ${id} not found`);
      } else {
        throw new BadRequestException('An unexpected error occurred');
      }
    }
  }

  async update(id: number, updateCirurgicRequestDto: UpdateCirurgicRequestDto) {
    if (Object.keys(updateCirurgicRequestDto).length === 0) {
      throw new BadRequestException('At least one field must be provided');
    }

    const validFields = [
      'doctor',
      'patient',
      'surgeryDate',
      'procedures',
      'hospital',
    ];
    const fields = Object.keys(updateCirurgicRequestDto);
    if (!fields.every((field) => validFields.includes(field))) {
      throw new BadRequestException('Invalid field provided');
    }

    try {
      return await this.prisma.cirurgicRequest.update({
        where: { id },
        data: updateCirurgicRequestDto,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`Cirurgic request with ID ${id} not found`);
      } else {
        throw new BadRequestException('An unexpected error occurred');
      }
    }
  }

  remove(id: number) {
    return this.prisma.cirurgicRequest.delete({
      where: { id },
    });
  }
}
