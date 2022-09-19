import { PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';
import { Types } from 'mongoose';
import { BillMongoArray } from 'src/modules/bills/types/BillMongoArray.type';
import Bill from '../../bills/entity/Bill.entity';
import Month from '../entity/Month.entity';

export class CreateMonthDto extends Month {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsArray()
  bills: Types.Array<Bill>;

  @IsNotEmpty()
  @IsBoolean()
  solvent: boolean;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Min(0)
  missing: number;
}
export class UpdateMonthDto extends PartialType(CreateMonthDto) {}

export class deleteBillsDto {
  @IsNotEmpty()
  @IsArray()
  bills: BillMongoArray;
}

export class FilterMonthDto extends UpdateMonthDto {}
