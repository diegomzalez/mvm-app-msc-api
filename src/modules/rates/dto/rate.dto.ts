import { PartialType } from '@nestjs/swagger';
import {
  IsDate,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  Min,
} from 'class-validator';

import { mongoId } from '../../../types/mongo-id.type';

export class CreateRateDto {
  @IsOptional()
  @IsPositive()
  readonly limit: number;

  @IsOptional()
  @Min(0)
  readonly offset: number;

  @IsNotEmpty()
  @IsMongoId()
  readonly currency: mongoId;

  @IsNotEmpty()
  @IsNumber()
  readonly rate: number;

  @IsNotEmpty()
  @IsDate()
  readonly date: Date;
}
export class UpdateRateDto extends PartialType(CreateRateDto) {}

export class FilterRateDto extends UpdateRateDto {}
