import { PartialType } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsPositive, IsString } from 'class-validator';
import { Types } from 'mongoose';
import Student from 'src/modules/students/entity/Student.entity';
import { CreateAdultDto } from '../../dto/Adult.dto';

export class CreateParentDto extends CreateAdultDto {
  @IsBoolean()
  readonly isAlive: boolean;

  @IsString()
  readonly sex: string;

  @IsArray()
  readonly children: Types.Array<Student>;
}
export class UpdateParentDto extends PartialType(CreateParentDto) {}

export class FilterParentDto extends UpdateParentDto {}
