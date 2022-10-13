import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

import { CreateThingDto } from './thing.dto';

export class CreatePersonDto extends CreateThingDto {
  @IsString()
  @IsNotEmpty()
  readonly middleName: string;

  @IsString()
  @IsNotEmpty()
  readonly surname: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;
}

export class UpdatePersonDto extends PartialType(CreatePersonDto) {}

export class FilterPersonDto extends UpdatePersonDto {}

export const personDto = [CreatePersonDto, UpdatePersonDto, FilterPersonDto];
