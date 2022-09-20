import { PartialType } from '@nestjs/swagger';
import { IsArray, IsOptional } from 'class-validator';
import { Types } from 'mongoose';

import { StudentMongoArray } from '../../students/types/StudentMongoArray.type';
import { CreateAdultDto } from '../../../dto/Adult.dto';

export class CreateRepresentativeDto extends CreateAdultDto {
  @IsArray()
  readonly studentRelationship: Types.Array<string>;
  @IsArray()
  readonly studentChildren: StudentMongoArray;
}
export class UpdateRepresentativeDto extends PartialType(
  CreateRepresentativeDto,
) {}

export class DeleteStudentChildrenDto {
  @IsOptional()
  @IsArray()
  readonly studentRelationship: Types.Array<string>;

  @IsOptional()
  @IsArray()
  readonly studentChildren: StudentMongoArray;
}

export class FilterRepresentativeDto extends UpdateRepresentativeDto {}
