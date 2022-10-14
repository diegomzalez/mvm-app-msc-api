import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';

import { CreateCustomerDto } from './customer.dto';

export class CreateAdultDto extends CreateCustomerDto {
  @IsOptional()
  @IsString()
  readonly address: string;

  @IsOptional()
  @IsString()
  readonly phoneNumber: string;

  @IsOptional()
  @IsString()
  readonly job: string;
}
export class UpdateAdultDto extends PartialType(CreateAdultDto) {}

export class FilterAdultDto extends UpdateAdultDto {}

export const adultDto = [CreateAdultDto, UpdateAdultDto, FilterAdultDto];
