import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CirurgicRequestsService } from './cirurgic-requests.service';
import { CreateCirurgicRequestDto } from './dto/create-cirurgic-request.dto';
import { UpdateCirurgicRequestDto } from './dto/update-cirurgic-request.dto';

@Controller('cirurgic-requests')
export class CirurgicRequestsController {
  constructor(private readonly cirurgicRequestsService: CirurgicRequestsService) {}

  @Post()
  create(@Body() createCirurgicRequestDto: CreateCirurgicRequestDto) {
    return this.cirurgicRequestsService.create(createCirurgicRequestDto);
  }

  @Get()
  findAll() {
    return this.cirurgicRequestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cirurgicRequestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCirurgicRequestDto: UpdateCirurgicRequestDto) {
    return this.cirurgicRequestsService.update(+id, updateCirurgicRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cirurgicRequestsService.remove(+id);
  }
}
