import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { TicketStatusType } from '../entities/Ticket';

export class UpdateTicketDto {
  @IsNotEmpty()
  @IsString()
  @IsEnum(TicketStatusType)
  status: string;
}
