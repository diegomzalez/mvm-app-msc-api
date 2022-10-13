import { PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  Min,
} from 'class-validator';
import { CreateThingDto } from '../../../dto/thing.dto';
import { mongoId } from '../../../types/mongo-id.type';

export class CreateMonthDto extends CreateThingDto {
  @IsNotEmpty()
  @IsArray()
  readonly bills: mongoId[];

  @IsNotEmpty()
  @IsBoolean()
  readonly solvent: boolean;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Min(0)
  readonly missing: number;
}

export class UpdateMonthDto extends PartialType(CreateMonthDto) {}

export class AddBillsDto {
  @IsNotEmpty()
  @IsArray()
  readonly bills: mongoId[];
}

export class deleteBillsDto extends AddBillsDto {}

export class FilterMonthDto extends UpdateMonthDto {}
