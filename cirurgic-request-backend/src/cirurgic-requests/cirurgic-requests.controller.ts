import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CirurgicRequestsService } from './cirurgic-requests.service';
import { CreateCirurgicRequestDto } from './dto/create-cirurgic-request.dto';
import { UpdateCirurgicRequestDto } from './dto/update-cirurgic-request.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Cirurgic Requests')
@Controller('cirurgic-requests')
export class CirurgicRequestsController {
  constructor(
    private readonly cirurgicRequestsService: CirurgicRequestsService,
  ) {}

  @Post()
  async create(@Body() createCirurgicRequestDto: CreateCirurgicRequestDto) {
    return await this.cirurgicRequestsService.create(createCirurgicRequestDto);
  }

  @Get()
  findAll() {
    return this.cirurgicRequestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.cirurgicRequestsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateCirurgicRequestDto: UpdateCirurgicRequestDto,
  ) {
    return this.cirurgicRequestsService.update(id, updateCirurgicRequestDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseIntPipe()) id: number) {
    return this.cirurgicRequestsService.remove(id);
  }
}
