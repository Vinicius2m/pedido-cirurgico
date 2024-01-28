import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { CirurgicRequestsModule } from './cirurgic-requests/cirurgic-requests.module';

@Module({
  imports: [PrismaModule, CirurgicRequestsModule],
})
export class AppModule {}
