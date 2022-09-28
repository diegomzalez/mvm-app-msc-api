import { PartialType } from '@nestjs/swagger';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  Min,
} from 'class-validator';

import Currency from '../../currency/entity/Currency.entity';

export class CreateRateDto {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @Min(0)
  offset: number;

  @IsNotEmpty()
  currency: Currency;

  @IsNotEmpty()
  @IsNumber()
  rate: number;

  @IsNotEmpty()
  @IsDate()
  date: Date;
}
export class UpdateRateDto extends PartialType(CreateRateDto) {}

export class FilterRateDto extends UpdateRateDto {}
