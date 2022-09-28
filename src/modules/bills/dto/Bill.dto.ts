import { PartialType } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import Currency from '../../currency/entity/Currency.entity';

import Bill from '../entity/Bill.entity';

export class CreateBillDto extends Bill {
  @IsNotEmpty()
  currency: Currency;

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
