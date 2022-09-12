import { PartialType } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import Month from '../../../entity/Month.entity';
import { CreateClientDto } from '../../../dto/Client.dto';

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
  @IsArray()
  liveWith: Array<Array<string> | string>;
  @IsArray()
  debs: Array<string>;
  @IsNumber()
  @IsNotEmpty()
  exoneration: number;
  @IsArray()
  months: Array<Month>;
  @IsString()
  allergies: string | null;
}
export class UpdateStudentDto extends PartialType(CreateStudentDto) {}
