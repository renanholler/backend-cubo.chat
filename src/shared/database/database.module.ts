import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { MessagesRepository } from './repositories/messages.repositories';
import { TicketsRepository } from './repositories/tickets.repositories';

@Global()
@Module({
  providers: [PrismaService, TicketsRepository, MessagesRepository],
  exports: [TicketsRepository, MessagesRepository],
})
export class DatabaseModule {}
