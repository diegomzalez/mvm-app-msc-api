import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateClientDto } from '../../../dtos/client.dto';

export class CreateStudentDto extends CreateClientDto {
  @IsNotEmpty()
  @IsString()
  birthday: string;
  @IsNotEmpty()
  @IsString()
  birthplace: string;
  @IsNotEmpty()
  @IsString()
  municipality: string;
  @IsNotEmpty()
  @IsString()
  state: string;
  @IsNotEmpty()
  @IsString()
  liveWith: string;
}
export class UpdateStudentDto extends PartialType(CreateStudentDto) {}
