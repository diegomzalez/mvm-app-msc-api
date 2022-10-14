import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import Relationship from 'src/interfaces/relationship.interface';

import { CreatePersonDto } from './person.dto';

export class CreateCustomerDto extends CreatePersonDto {
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
export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}

export class FilterCustomerDto extends UpdateCustomerDto {}
export const customerDto = [
  CreateCustomerDto,
  UpdateCustomerDto,
  FilterCustomerDto,
];
