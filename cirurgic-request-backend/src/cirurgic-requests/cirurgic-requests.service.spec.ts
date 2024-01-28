import { Test, TestingModule } from '@nestjs/testing';
import { CirurgicRequestsService } from './cirurgic-requests.service';

describe('CirurgicRequestsService', () => {
  let service: CirurgicRequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CirurgicRequestsService],
    }).compile();

    service = module.get<CirurgicRequestsService>(CirurgicRequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
