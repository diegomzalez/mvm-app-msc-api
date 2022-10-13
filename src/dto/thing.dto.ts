import { PartialType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreateThingDto {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @Min(0)
  offset: number;

  @IsString()
  @IsNotEmpty()
  readonly name: string;
}

export class UpdateThingDto extends PartialType(CreateThingDto) {}

export class FilterThingDto extends UpdateThingDto {}

export const thingDto = [CreateThingDto, UpdateThingDto, FilterThingDto];
