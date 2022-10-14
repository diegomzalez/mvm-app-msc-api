import { PartialType } from '@nestjs/swagger';
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Max,
  Min,
} from 'class-validator';

import { CreateCustomerDto } from '../../../dto/customer.dto';
import { mongoId } from '../../../types/mongo-id.type';

export class CreateStudentDto extends CreateCustomerDto {
  @IsOptional()
  @IsDate()
  readonly birthday: Date;

  @IsOptional()
  @IsString()
  readonly birthplace: string;

  @IsOptional()
  @IsString()
  readonly municipality: string;

  @IsOptional()
  @IsString()
  readonly state: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  readonly age: number;

  @IsOptional()
  @IsArray()
  readonly parents: mongoId[];

  @IsOptional()
  @IsArray()
  readonly representatives: mongoId[];

  @IsOptional()
  @IsString()
  readonly liveWith: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(8)
  @IsNotEmpty()
  readonly exoneration: number;

  @IsOptional()
  @IsString()
  readonly allergies: string;

  @IsOptional()
  @IsArray()
  readonly paidMonths: mongoId[];
}
export class UpdateStudentDto extends PartialType(CreateStudentDto) {}

export class AddParentsDto {
  @IsNotEmpty()
  @IsArray()
  readonly parents: mongoId[];
}

export class AddRepresentativeDto {
  @IsNotEmpty()
  @IsArray()
  readonly representatives: mongoId[];
}

export class AddPaidMonthsDto {
  @IsNotEmpty()
  @IsArray()
  readonly paidMonths: mongoId[];
}

export class DeleteParentsDto extends AddParentsDto {}

export class DeleteRepresentativesDto extends AddRepresentativeDto {}

export class DeletePaidMonthsDto extends AddPaidMonthsDto {}

export class FilterStudentDto extends UpdateStudentDto {}
