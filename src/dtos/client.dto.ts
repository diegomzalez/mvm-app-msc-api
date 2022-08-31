import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreatePersonDto } from './person.dto';
export class CreateClientDto extends CreatePersonDto {
  @IsNotEmpty()
  @IsString()
  readonly ci: string;
}
export class UpdateClientDto extends PartialType(CreateClientDto) {}

const clientDtos = [CreateClientDto, UpdateClientDto];
export default clientDtos;
