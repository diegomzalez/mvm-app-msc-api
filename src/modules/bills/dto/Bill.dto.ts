import { PartialType } from '@nestjs/swagger';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  Min,
} from 'class-validator';
import Bill from '../entity/Bill.entity';

export class CreateBillDto extends Bill {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Min(0)
  limit: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Min(0)
  offset: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  rate: number;

  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  amount: number;
}

export class UpdateBillDto extends PartialType(CreateBillDto) {}

export class FilterBillDto extends UpdateBillDto {}
