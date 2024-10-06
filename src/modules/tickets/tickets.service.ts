import { Injectable } from '@nestjs/common';
import { TicketsRepository } from 'src/shared/database/repositories/tickets.repositories';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Injectable()
export class TicketsService {
  constructor(private readonly ticketsRepo: TicketsRepository) {}

  findAll() {
    return this.ticketsRepo.findAll();
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    const { status } = updateTicketDto;
    return this.ticketsRepo.update({
      where: { id },
      data: {
        status,
      },
    });
  }
}
