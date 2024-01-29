import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { CirurgicRequestsModule } from '../src/cirurgic-requests/cirurgic-requests.module';
import { PrismaService } from '../src/prisma/prisma.service';
import { PrismaModule } from '../src/prisma/prisma.module';

describe('CirurgicRequestsController (e2e)', () => {
  let app: INestApplication;

  const mockCirurgicRequest = {
    doctor: 'Doctor 1',
    patient: 'Patient 1',
    surgeryDate: new Date().toISOString(),
    generalNotes: 'General notes 1',
    room: 'Room 1',
    procedures: 'Procedures 1',
    hospital: 'Hospital 1',
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CirurgicRequestsModule, PrismaModule],
      providers: [PrismaService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/cirurgic-requests (POST)', () => {
    return request(app.getHttpServer())
      .post('/cirurgic-requests')
      .send(mockCirurgicRequest)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            doctor: mockCirurgicRequest.doctor,
            patient: mockCirurgicRequest.patient,
            surgeryDate: mockCirurgicRequest.surgeryDate,
            generalNotes: mockCirurgicRequest.generalNotes,
            room: mockCirurgicRequest.room,
            procedures: mockCirurgicRequest.procedures,
            hospital: mockCirurgicRequest.hospital,
          }),
        );
      });
  });

  it('/cirurgic-requests (GET)', () => {
    return request(app.getHttpServer()).get('/cirurgic-requests').expect(200);
  });
});
