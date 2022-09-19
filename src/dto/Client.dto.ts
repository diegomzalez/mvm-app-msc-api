import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional } from 'class-validator';
import { CreatePersonDto } from './Person.dto';
export class CreateClientDto extends CreatePersonDto {
  @IsOptional()
  @IsNumber()
  readonly ci: number;
}
export class UpdateClientDto extends PartialType(CreateClientDto) {}

export class FilterClientDto extends UpdateClientDto {}
export const clientDto = [CreateClientDto, UpdateClientDto, FilterClientDto];
