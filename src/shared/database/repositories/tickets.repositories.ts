import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TicketsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.ticket.findMany();
  }

  update(updateDto: Prisma.TicketUpdateArgs) {
    return this.prismaService.ticket.update(updateDto);
  }
}
