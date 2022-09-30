import { PartialType } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';

import { CreateAdultDto } from '../../../dto/adult.dto';
import { mongoId } from '../../../types/mongo-id.type';

export class CreateRepresentativeDto extends CreateAdultDto {
  @IsOptional()
  @IsArray()
  readonly studentChildren: mongoId[];
}
export class UpdateRepresentativeDto extends PartialType(
  CreateRepresentativeDto,
) {}

export class AddStudentChildrenDto {
  @IsNotEmpty()
  @IsArray()
  readonly studentChildren: mongoId[];
}

export class DeleteStudentChildrenDto extends AddStudentChildrenDto {}

export class FilterRepresentativeDto extends UpdateRepresentativeDto {}
