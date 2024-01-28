import { Injectable } from '@nestjs/common';
import { CreateCirurgicRequestDto } from './dto/create-cirurgic-request.dto';
import { UpdateCirurgicRequestDto } from './dto/update-cirurgic-request.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CirurgicRequestsService {
  constructor (private prisma: PrismaService) {}

  create(createCirurgicRequestDto: CreateCirurgicRequestDto) {
    return 'This action adds a new cirurgicRequest';
  }

  findAll() {
    return `This action returns all cirurgicRequests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cirurgicRequest`;
  }

  update(id: number, updateCirurgicRequestDto: UpdateCirurgicRequestDto) {
    return `This action updates a #${id} cirurgicRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} cirurgicRequest`;
  }
}
