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
import Month from '../../months/entity/Month.entity';
import { CreateClientDto } from '../../dto/Client.dto';
import { Types } from 'mongoose';
import Representative from 'src/modules/representatives/entity/Representative.entity';
import Parent from 'src/modules/parents/entity/Parent.entity';

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
  readonly parents: Types.Array<Parent>;

  @IsArray()
  readonly representatives: Types.Array<Representative>;

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
  readonly paidMonths: Types.Array<Month>;

  @IsArray()
  readonly debts: string[];
}
export class UpdateStudentDto extends PartialType(CreateStudentDto) {}

export class DeleteParentsDto {
  @IsOptional()
  @IsArray()
  readonly parents: Types.Array<Parent>;
}

export class DeleteRepresentativesDto {
  @IsOptional()
  @IsArray()
  readonly representatives: Types.Array<Representative>;
}

export class FilterStudentDto extends UpdateStudentDto {}
