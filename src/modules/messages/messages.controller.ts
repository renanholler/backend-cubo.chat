import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get(':ticketId')
  findAll(@Param('ticketId', ParseIntPipe) ticketId: number) {
    return this.messagesService.findAllByTicketId(ticketId);
  }
}
