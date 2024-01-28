import { Test, TestingModule } from '@nestjs/testing';
import { CirurgicRequestsController } from './cirurgic-requests.controller';
import { CirurgicRequestsService } from './cirurgic-requests.service';

describe('CirurgicRequestsController', () => {
  let controller: CirurgicRequestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CirurgicRequestsController],
      providers: [CirurgicRequestsService],
    }).compile();

    controller = module.get<CirurgicRequestsController>(CirurgicRequestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
