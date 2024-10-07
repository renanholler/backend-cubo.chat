import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TicketsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.ticket.findMany({
      include: {
        messages: {
          take: 1,
          orderBy: {
            id: 'desc',
          },
        },
      },
    });
  }

  update(updateDto: Prisma.TicketUpdateArgs) {
    return this.prismaService.ticket.update(updateDto);
  }
}
