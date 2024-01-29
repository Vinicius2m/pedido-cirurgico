import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
} from '@nestjs/common';
import { CirurgicRequestsService } from './cirurgic-requests.service';
import { CreateCirurgicRequestDto } from './dto/create-cirurgic-request.dto';
import { UpdateCirurgicRequestDto } from './dto/update-cirurgic-request.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CirurgicRequestDto } from './dto/cirurgic-request.dto';

@ApiTags('Cirurgic Requests')
@Controller('cirurgic-requests')
export class CirurgicRequestsController {
  constructor(
    private readonly cirurgicRequestsService: CirurgicRequestsService,
  ) {}

  @ApiOperation({
    summary: 'Criar um novo pedido cirúrgico',
    description: 'Cria um pedido cirúrgico',
  })
  @ApiResponse({
    status: 201,
    type: CirurgicRequestDto,
    description: 'Sucesso',
  })
  @Post()
  async create(
    @Body() createCirurgicRequestDto: CreateCirurgicRequestDto,
  ): Promise<CirurgicRequestDto> {
    return await this.cirurgicRequestsService.create(createCirurgicRequestDto);
  }

  @ApiOperation({
    summary: 'Listar todos os pedidos cirúrgicos',
    description: 'Lista todos os pedidos cirúrgicos',
  })
  @ApiResponse({
    status: 200,
    type: [CirurgicRequestDto],
    description: 'Sucesso',
  })
  @Get()
  findAll(): Promise<CirurgicRequestDto[]> {
    return this.cirurgicRequestsService.findAll();
  }

  @ApiOperation({
    summary: 'Buscar um pedido cirúrgico',
    description: 'Busca um pedido cirúrgico',
  })
  @ApiResponse({
    status: 200,
    type: CirurgicRequestDto,
    description: 'Sucesso',
  })
  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<CirurgicRequestDto> {
    return this.cirurgicRequestsService.findOne(id);
  }

  @ApiOperation({
    summary: 'Atualizar um pedido cirúrgico',
    description: 'Atualiza um pedido cirúrgico',
  })
  @ApiResponse({
    status: 200,
    type: CirurgicRequestDto,
    description: 'Sucesso',
  })
  @Patch(':id')
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateCirurgicRequestDto: UpdateCirurgicRequestDto,
  ): Promise<CirurgicRequestDto> {
    return this.cirurgicRequestsService.update(id, updateCirurgicRequestDto);
  }

  @ApiOperation({
    summary: 'Remover um pedido cirúrgico',
    description: 'Remove um pedido cirúrgico',
  })
  @ApiResponse({
    status: 204,
    description: 'Sucesso',
  })
  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id', new ParseIntPipe()) id: number) {
    return this.cirurgicRequestsService.remove(id);
  }
}
