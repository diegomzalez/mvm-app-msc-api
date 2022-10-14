import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import Relationship from 'src/interfaces/relationship.interface';

import { CreatePersonDto } from './person.dto';

export class CreateClientDto extends CreatePersonDto {
  @IsOptional()
  @IsNumber()
  readonly ci: number;

  @IsOptional()
  @IsString()
  readonly degreeOfInstruction: string;

  @IsOptional()
  @IsObject()
  readonly relationship: Relationship;
}
export class UpdateClientDto extends PartialType(CreateClientDto) {}

export class FilterClientDto extends UpdateClientDto {}
export const clientDto = [CreateClientDto, UpdateClientDto, FilterClientDto];
