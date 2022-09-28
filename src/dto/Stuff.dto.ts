import { PartialType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreateStuffDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @Min(0)
  offset: number;
}

export class UpdateStuffDto extends PartialType(CreateStuffDto) {}

export class FilterStuffDto extends UpdateStuffDto {}

export const stuffDto = [CreateStuffDto, UpdateStuffDto, FilterStuffDto];
