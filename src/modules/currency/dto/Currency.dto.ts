import { PartialType } from '@nestjs/swagger';
import { IsArray, IsEmpty, IsNotEmpty } from 'class-validator';

import { CreateStuffDto } from '../../../dto/Stuff.dto';
import RateArrayType from '../../rate/types/RateArray.type';

export class CreateCurrencyDto extends CreateStuffDto {
  @IsArray()
  rates: RateArrayType;
}

export class UpdateCurrencyDto extends PartialType(CreateCurrencyDto) {}

export class AddRatesDto {
  @IsNotEmpty()
  @IsArray()
  rates: RateArrayType;
}

export class DeleteRatesDto extends AddRatesDto {}

export class FilterCurrencyDto extends UpdateCurrencyDto {}
