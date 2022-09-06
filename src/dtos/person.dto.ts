import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import Person from '../entities/person.entity';
export class CreatePersonDto extends Person {
  @IsNumber()
  @IsNotEmpty()
  readonly id: number;
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly middleName: string;
  @IsString()
  @IsNotEmpty()
  readonly surname: string;
  @IsString()
  @IsNotEmpty()
  readonly lastName: string;
}
export class UpdatePersonDto extends PartialType(CreatePersonDto) {}
const personDtos = [CreatePersonDto, UpdatePersonDto];
export default personDtos;
