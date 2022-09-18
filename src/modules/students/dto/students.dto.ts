import { PartialType } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Max,
  Min,
} from 'class-validator';
import Month from '../../months/entity/Month.entity';
import { CreateClientDto } from '../../dto/Client.dto';
import { Types } from 'mongoose';
import Representative from 'src/modules/representatives/entity/Representative.entity';

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
  readonly parents: Types.ObjectId[];

  @IsArray()
  readonly representatives: Types.ObjectId[];

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

export class AddRepresentativesDto {
  @IsNotEmpty()
  @IsArray()
  representativesId: Types.Array<Representative>;
}

export class FilterStudentDto extends UpdateStudentDto {}
