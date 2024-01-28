import { Module } from '@nestjs/common';
import { CirurgicRequestsService } from './cirurgic-requests.service';
import { CirurgicRequestsController } from './cirurgic-requests.controller';

@Module({
  controllers: [CirurgicRequestsController],
  providers: [CirurgicRequestsService],
})
export class CirurgicRequestsModule {}
