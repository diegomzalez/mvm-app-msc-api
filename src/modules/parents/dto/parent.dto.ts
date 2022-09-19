import { PartialType } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

import { StudentMongoArray } from '../../students/types/StudentMongoArray.type';
import { CreateAdultDto } from '../../../dto/Adult.dto';

export class CreateParentDto extends CreateAdultDto {
  @IsOptional()
  @IsBoolean()
  readonly isAlive: boolean;

  @IsOptional()
  @IsString()
  readonly sex: string;

  @IsOptional()
  @IsArray()
  readonly children: StudentMongoArray;
}
export class UpdateParentDto extends PartialType(CreateParentDto) {}

export class DeleteChildrenDto {
  @IsNotEmpty()
  @IsArray()
  readonly children: StudentMongoArray;
}

export class FilterParentDto extends UpdateParentDto {}
