import { PartialType } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

import { CreateAdultDto } from '../../../dto/adult.dto';
import { mongoId } from '../../../types/mongo-id.type';

export class CreateParentDto extends CreateAdultDto {
  @IsOptional()
  @IsBoolean()
  readonly isAlive: boolean;

  @IsOptional()
  @IsString()
  readonly sex: string;

  @IsOptional()
  @IsArray()
  readonly children: mongoId[];
}
export class UpdateParentDto extends PartialType(CreateParentDto) {}

export class AddChildrenDto {
  @IsNotEmpty()
  @IsArray()
  readonly children: mongoId[];
}

export class DeleteChildrenDto extends AddChildrenDto {}

export class FilterParentDto extends UpdateParentDto {}
