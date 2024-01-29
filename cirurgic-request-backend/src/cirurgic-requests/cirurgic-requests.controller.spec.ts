import { Test, TestingModule } from '@nestjs/testing';
import { CirurgicRequestsController } from './cirurgic-requests.controller';
import { CirurgicRequestsService } from './cirurgic-requests.service';
import { CreateCirurgicRequestDto } from './dto/create-cirurgic-request.dto';
import { UpdateCirurgicRequestDto } from './dto/update-cirurgic-request.dto';
import { PrismaService } from '../prisma/prisma.service';

describe('CirurgicRequestsController', () => {
  let controller: CirurgicRequestsController;
  let service: CirurgicRequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CirurgicRequestsController],
      providers: [CirurgicRequestsService, PrismaService],
    }).compile();

    controller = module.get<CirurgicRequestsController>(
      CirurgicRequestsController,
    );
    service = module.get<CirurgicRequestsService>(CirurgicRequestsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new cirurgic request', async () => {
      const createDto: CreateCirurgicRequestDto = {
        doctor: 'Doctor 1',
        patient: 'Patient 1',
        surgeryDate: new Date().toISOString(),
        generalNotes: 'General notes 1',
        room: 'Room 1',
        procedures: 'Procedures 1',
        hospital: 'Hospital 1',
      };

      const expectedResult = {
        id: 1,
        createdAt: new Date(),
        ...createDto,
        surgeryDate: new Date(createDto.surgeryDate),
      };

      jest.spyOn(service, 'create').mockResolvedValue(expectedResult);

      const result = await controller.create(createDto);

      expect(result).toBe(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return all cirurgic requests', async () => {
      const expectedResult = [
        {
          id: 1,
          doctor: 'Doctor 1',
          patient: 'Patient 1',
          surgeryDate: new Date(),
          generalNotes: 'General notes 1',
          room: 'Room 1',
          procedures: 'Procedures 1',
          hospital: 'Hospital 1',
          createdAt: new Date(),
        },
      ];

      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult);

      const result = await controller.findAll();

      expect(result).toBe(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a cirurgic request by id', async () => {
      const id = 1;
      const expectedResult = {
        id: 1,
        doctor: 'Doctor 1',
        patient: 'Patient 1',
        surgeryDate: new Date(),
        generalNotes: 'General notes 1',
        room: 'Room 1',
        procedures: 'Procedures 1',
        hospital: 'Hospital 1',
        createdAt: new Date(),
      };

      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult);

      const result = await controller.findOne(id);

      expect(result).toBe(expectedResult);
    });
  });

  describe('update', () => {
    it('should update a cirurgic request by id', async () => {
      const id = 1;
      const updateDto: UpdateCirurgicRequestDto = {
        doctor: 'Updated Doctor',
        patient: 'Updated Patient',
        surgeryDate: new Date().toISOString(),
        generalNotes: 'Updated general notes',
        room: 'Updated Room',
        procedures: 'Updated Procedures',
        hospital: 'Updated Hospital',
      };

      const expectedResult = {
        id: 1,
        doctor: updateDto.doctor,
        patient: updateDto.patient,
        surgeryDate: new Date(updateDto.surgeryDate),
        generalNotes: updateDto.generalNotes,
        room: updateDto.room,
        procedures: updateDto.procedures,
        hospital: updateDto.hospital,
        createdAt: new Date(),
      };

      jest.spyOn(service, 'update').mockResolvedValue(expectedResult);

      const result = await controller.update(id, updateDto);

      expect(result).toBe(expectedResult);
    });
  });

  describe('remove', () => {
    it('should remove a cirurgic request by id', async () => {
      const id = 1;

      jest.spyOn(service, 'remove').mockResolvedValue(undefined);

      const result = await controller.remove(id);

      expect(result).toBeUndefined();
    });
  });
});
