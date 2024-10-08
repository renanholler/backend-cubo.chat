import { PrismaClient } from '@prisma/client';
import { SenderType } from '../src/modules/messages/entities/Message';
import { TicketStatusType } from '../src/modules/tickets/entities/Ticket';

const prisma = new PrismaClient();

async function main() {
  const tickets = await prisma.ticket.findMany();

  if (tickets.length > 0) {
    console.log('Tickets already seeded.');
    return;
  }

  await Promise.all([
    prisma.ticket.create({
      data: {
        clientName: 'Renan Ricardo',
        status: TicketStatusType.WAITING,
        messages: {
          create: [
            {
              content: 'Olá, preciso de ajuda..',
              sender: SenderType.CLIENT,
            },
          ],
        },
      },
    }),
    prisma.ticket.create({
      data: {
        clientName: 'Marcos Renato',
        status: TicketStatusType.OPEN,
        messages: {
          create: [
            {
              content: 'Olá, preciso de ajuda com meu pedido.',
              sender: SenderType.CLIENT,
            },
            {
              content: 'Claro, em que posso ajudar?',
              sender: SenderType.CUBO_CHAT,
            },
            {
              content: 'Quero ajuda para rastrear meu pedido.',
              sender: SenderType.CLIENT,
            },
            {
              content: 'Não sei onde ele está.',
              sender: SenderType.CLIENT,
            },
          ],
        },
      },
    }),
    prisma.ticket.create({
      data: {
        clientName: 'Sandra Aparecida',
        status: TicketStatusType.CLOSED,
        messages: {
          create: [
            {
              content: 'Meu produto chegou com defeito.',
              sender: SenderType.CLIENT,
            },
            {
              content: 'Lamentamos o ocorrido. Vamos providenciar a troca.',
              sender: SenderType.CUBO_CHAT,
            },
            {
              content: 'Pode nos contar mais detalhes?',
              sender: SenderType.CUBO_CHAT,
            },
          ],
        },
      },
    }),
    prisma.ticket.create({
      data: {
        clientName: 'Tabata Souza',
        status: TicketStatusType.OPEN,
        messages: {
          create: [
            {
              content: 'Meu produto ainda não chegou.',
              sender: SenderType.CLIENT,
            },
            {
              content: 'Pode nos contar mais detalhes?',
              sender: SenderType.CUBO_CHAT,
            },
          ],
        },
      },
    }),
    prisma.ticket.create({
      data: {
        clientName: 'Matheus Henrique',
        status: TicketStatusType.OPEN,
        messages: {
          create: [
            {
              content: 'Olá.',
              sender: SenderType.CLIENT,
            },
          ],
        },
      },
    }),
  ]);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
