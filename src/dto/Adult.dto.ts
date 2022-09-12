import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateClientDto } from './Client.dto';
export class CreateAdultDto extends CreateClientDto {
  @IsNotEmpty()
  @IsString()
  readonly direction: string;
  @IsNotEmpty()
  @IsString()
  readonly phone: string;
  @IsNotEmpty()
  @IsString()
  readonly degreeOfInstruction: string;
  @IsNotEmpty()
  @IsString()
  readonly work: string;
}
export class UpdateAdultDto extends PartialType(CreateAdultDto) {}

export const adultDto = [CreateAdultDto, UpdateAdultDto];
