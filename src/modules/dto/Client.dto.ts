import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreatePersonDto, FilterPersonDto } from './Person.dto';
export class CreateClientDto extends CreatePersonDto {
  @IsNumber()
  readonly ci: number;
}
export class UpdateClientDto extends PartialType(CreateClientDto) {}

export class FilterClientDto extends FilterPersonDto {}
export const clientDto = [CreateClientDto, UpdateClientDto, FilterClientDto];
