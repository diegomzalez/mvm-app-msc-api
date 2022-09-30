import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';

import { CreateClientDto } from './client.dto';

export class CreateAdultDto extends CreateClientDto {
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
