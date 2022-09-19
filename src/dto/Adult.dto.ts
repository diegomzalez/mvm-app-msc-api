import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';
import { CreateClientDto, FilterClientDto } from './Client.dto';
export class CreateAdultDto extends CreateClientDto {
  @IsOptional()
  @IsString()
  readonly direction: string;

  @IsOptional()
  @IsString()
  readonly phone: string;

  @IsOptional()
  @IsString()
  readonly degreeOfInstruction: string;

  @IsOptional()
  @IsString()
  readonly job: string;
}
export class UpdateAdultDto extends PartialType(CreateAdultDto) {}

export class FilterAdultDto extends UpdateAdultDto {}

export const adultDto = [CreateAdultDto, UpdateAdultDto, FilterAdultDto];
