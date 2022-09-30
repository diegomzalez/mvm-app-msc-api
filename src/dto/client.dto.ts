import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
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
  relationship: object;
}
export class UpdateClientDto extends PartialType(CreateClientDto) {}

export class FilterClientDto extends UpdateClientDto {}
export const clientDto = [CreateClientDto, UpdateClientDto, FilterClientDto];
