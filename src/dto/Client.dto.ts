import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreatePersonDto } from './Person.dto';
export class CreateClientDto extends CreatePersonDto {
  @IsNotEmpty()
  @IsNumber()
  readonly ci: number;
}
export class UpdateClientDto extends PartialType(CreateClientDto) {}

export const clientDto = [CreateClientDto, UpdateClientDto];
