import { PartialType } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import Student from 'src/modules/students/entity/Student.entity';
import { CreateAdultDto } from '../../dto/Adult.dto';

export class CreateRepresentativeDto extends CreateAdultDto {
  @IsArray()
  readonly representativeChildrenRelationship: string[];
  @IsArray()
  readonly representativeChildrenList: Student[];
}
export class UpdateRepresentativeDto extends PartialType(
  CreateRepresentativeDto,
) {}
