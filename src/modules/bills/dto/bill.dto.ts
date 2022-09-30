import { PartialType } from '@nestjs/swagger';
import {
  IsDate,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsPositive,
} from 'class-validator';

import { mongoId } from '../../../types/mongo-id.type';
import Bill from '../entity/bill.entity';

export class CreateBillDto extends Bill {
  @IsNotEmpty()
  @IsMongoId()
  readonly currency: mongoId;

  @IsNotEmpty()
  @IsDate()
  readonly date: Date;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly amount: number;
}

export class UpdateBillDto extends PartialType(CreateBillDto) {}

export class FilterBillDto extends UpdateBillDto {}
