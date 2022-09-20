import { PartialType } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Max,
  Min,
} from 'class-validator';

import { CreateClientDto } from '../../../dto/Client.dto';
import { Types } from 'mongoose';
import Representative from 'src/modules/representatives/entity/Representative.entity';
import { ParentMongoArray } from '../../parents/types/ParentMongoArray.type';
import { RepresentativeMongoArray } from '../../representatives/types/RepresentativeMongoArray.type';
import { MonthMongoArray } from '../../months/types/MonthMongoArray.type';

export class CreateStudentDto extends CreateClientDto {
  @IsString()
  readonly birthday: string;

  @IsString()
  readonly birthplace: string;

  @IsString()
  readonly municipality: string;

  @IsString()
  readonly state: string;

  @IsNumber()
  @IsPositive()
  readonly age: number;

  @IsArray()
  readonly parents: ParentMongoArray;

  @IsArray()
  readonly representatives: RepresentativeMongoArray;

  @IsString()
  readonly liveWith: string;

  @IsNumber()
  @Min(0)
  @Max(8)
  @IsNotEmpty()
  readonly exoneration: number;

  @IsString()
  readonly allergies: string;

  @IsArray()
  readonly paidMonths: MonthMongoArray;

  @IsArray()
  readonly debts: string[];
}
export class UpdateStudentDto extends PartialType(CreateStudentDto) {}

export class DeleteParentsDto {
  @IsOptional()
  @IsArray()
  readonly parents: ParentMongoArray;
}

export class DeleteRepresentativesDto {
  @IsOptional()
  @IsArray()
  readonly representatives: RepresentativeMongoArray;
}

export class FilterStudentDto extends UpdateStudentDto {}
