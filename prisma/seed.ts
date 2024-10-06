import { PrismaClient } from '@prisma/client';
import { SenderType } from '../src/modules/messages/entities/Message';
import { TicketStatusType } from '../src/modules/tickets/entities/Ticket';

const prisma = new PrismaClient();

async function main() {
  await Promise.all([
    prisma.ticket.create({
      data: {
        clientName: 'Renan Silva',
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
        clientName: 'João Silva',
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
        clientName: 'Maria Oliveira',
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
  ]);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
