import { Module } from '@nestjs/common';
import { MessagesModule } from './modules/messages/messages.module';
import { TicketsModule } from './modules/tickets/tickets.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [TicketsModule, DatabaseModule, MessagesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
