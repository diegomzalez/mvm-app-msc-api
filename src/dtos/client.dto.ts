import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreatePersonDto } from './person.dto';
export class CreateClientDto extends CreatePersonDto {
  @IsNotEmpty()
  @IsNumber()
  readonly ci: number;
}
export class UpdateClientDto extends PartialType(CreateClientDto) {}

const clientDtos = [CreateClientDto, UpdateClientDto];
export default clientDtos;
