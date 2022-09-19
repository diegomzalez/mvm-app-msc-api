import { PartialType } from '@nestjs/swagger';
import { IsArray, IsOptional } from 'class-validator';
import { Types } from 'mongoose';
import Student from 'src/modules/students/entity/Student.entity';
import { CreateAdultDto } from '../../../dto/Adult.dto';

export class CreateRepresentativeDto extends CreateAdultDto {
  @IsArray()
  readonly studentRelationship: Types.Array<string>;
  @IsArray()
  readonly studentChildren: Types.Array<Student>;
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
  readonly studentChildren: Types.Array<Student>;
}

export class FilterRepresentativeDto extends UpdateRepresentativeDto {}
