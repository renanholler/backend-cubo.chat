import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MessagesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findManyDto: Prisma.MessageFindManyArgs) {
    return this.prismaService.message.findMany(findManyDto);
  }
}
