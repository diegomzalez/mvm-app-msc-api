import { PartialType } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';

import { mongoId } from '../../../types/mongo-id.type';

import { CreateThingDto } from '../../../dto/thing.dto';

export class CreateCurrencyDto extends CreateThingDto {
  @IsOptional()
  @IsArray()
  readonly rates: mongoId[];
}

export class UpdateCurrencyDto extends PartialType(CreateCurrencyDto) {}

export class AddRatesDto {
  @IsNotEmpty()
  @IsArray()
  readonly rates: mongoId[];
}

export class DeleteRatesDto extends AddRatesDto {}

export class FilterCurrencyDto extends UpdateCurrencyDto {}
