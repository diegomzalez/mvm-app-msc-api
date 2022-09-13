import { PartialType } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import Month from '../../entity/Month.entity';
import { CreateClientDto } from '../../dto/Client.dto';

export class CreateStudentDto extends CreateClientDto {
  @IsString()
  birthday: string;

  @IsString()
  birthplace: string;

  @IsString()
  municipality: string;

  @IsString()
  state: string;

  @IsString()
  liveWith: string;

  @IsArray()
  debs: string[];

  @IsNumber()
  @IsNotEmpty()
  exoneration: number;

  @IsArray()
  months: Month[];

  @IsString()
  allergies: string;
}
export class UpdateStudentDto extends PartialType(CreateStudentDto) {}
