import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

import { CreateStuffDto } from './Stuff.dto';

export class CreatePersonDto extends CreateStuffDto {
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
