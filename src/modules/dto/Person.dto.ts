import {
  IsString,
  IsNotEmpty,
  IsPositive,
  Min,
  IsOptional,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import Person from '../entity/Person.entity';
export class CreatePersonDto extends Person {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @Min(0)
  offset: number;

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
export class FilterPersonDto extends UpdatePersonDto {}
export const personDto = [CreatePersonDto, UpdatePersonDto, FilterPersonDto];
