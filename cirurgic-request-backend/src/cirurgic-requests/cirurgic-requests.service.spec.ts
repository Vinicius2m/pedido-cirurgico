import { PrismaService } from '../prisma/prisma.service';
import { CreateCirurgicRequestDto } from './dto/create-cirurgic-request.dto';
import { UpdateCirurgicRequestDto } from './dto/update-cirurgic-request.dto';
import { CirurgicRequestsService } from './cirurgic-requests.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('CirurgicRequestsService', () => {
  let service: CirurgicRequestsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CirurgicRequestsService, PrismaService],
    }).compile();

    service = module.get<CirurgicRequestsService>(CirurgicRequestsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(async () => {
    await prisma.$disconnect();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a cirurgic request', async () => {
    const dto = new CreateCirurgicRequestDto();
    const result = {};
    jest
      .spyOn(prisma.cirurgicRequest, 'create')
      .mockResolvedValue(result as any);

    expect(await service.create(dto)).toBe(result);
  });

  it('should find all cirurgic requests', async () => {
    const result = [];
    jest.spyOn(prisma.cirurgicRequest, 'findMany').mockResolvedValue(result);

    expect(await service.findAll()).toBe(result);
  });

  it('should find one cirurgic request', async () => {
    const result = {};
    jest
      .spyOn(prisma.cirurgicRequest, 'findUniqueOrThrow')
      .mockResolvedValue(result as any);

    expect(await service.findOne(1)).toBe(result);
  });

  it('should update a cirurgic request', async () => {
    const dto = new UpdateCirurgicRequestDto();
    const result = {
      doctor: 'doctor',
      patient: 'patient',
    };

    jest
      .spyOn(prisma.cirurgicRequest, 'update')
      .mockResolvedValue(result as any);

    dto.doctor = 'doctor';
    dto.patient = 'patient';

    expect(await service.update(1, dto)).toBe(result);
  });

  it('should remove a cirurgic request', async () => {
    jest.spyOn(prisma.cirurgicRequest, 'delete').mockResolvedValue(null);

    expect(await service.remove(1)).toBe(null);
  });

  it('should throw an error when updating a cirurgic request with no fields', async () => {
    const dto = new UpdateCirurgicRequestDto();
    dto.doctor = undefined;
    dto.patient = undefined;

    try {
      await service.update(1, dto);
    } catch (error) {
      expect(error.message).toBe('At least one field must be provided');
    }
  });

  it('should throw an error when updating a cirurgic request with invalid fields', async () => {
    const dto = new UpdateCirurgicRequestDto();
    dto['invalidField'] = 'invalidField';

    try {
      await service.update(1, dto);
    } catch (error) {
      expect(error.message).toBe('Invalid field provided');
    }
  });

  it('should throw an error when updating a cirurgic request with invalid fields', async () => {
    const dto = new UpdateCirurgicRequestDto();
    dto['invalidField'] = 'invalidField';

    try {
      await service.update(1, dto);
    } catch (error) {
      expect(error.message).toBe('Invalid field provided');
    }
  });

  it('should throw an error when updating a cirurgic request with invalid fields', async () => {
    const dto = new UpdateCirurgicRequestDto();
    dto['invalidField'] = 'invalidField';

    try {
      await service.update(1, dto);
    } catch (error) {
      expect(error.message).toBe('Invalid field provided');
    }
  });

  it('should throw an error when updating a cirurgic request with invalid fields', async () => {
    const dto = new UpdateCirurgicRequestDto();
    dto['invalidField'] = 'invalidField';

    try {
      await service.update(1, dto);
    } catch (error) {
      expect(error.message).toBe('Invalid field provided');
    }
  });
});
