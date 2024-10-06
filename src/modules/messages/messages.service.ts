import { Injectable } from '@nestjs/common';
import { MessagesRepository } from 'src/shared/database/repositories/messages.repositories';

@Injectable()
export class MessagesService {
  constructor(private readonly messagesRepo: MessagesRepository) {}

  findAllByTicketId(ticketId: number) {
    return this.messagesRepo.findMany({
      where: {
        ticketId,
      },
    });
  }
}
