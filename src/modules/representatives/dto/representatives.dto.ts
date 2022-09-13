import { PartialType } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import { CreateAdultDto } from '../../dto/Adult.dto';
import { representativeChildren } from '../types/representativeChildren.type';

export class CreateRepresentativeDto extends CreateAdultDto {
  @IsArray()
  readonly representativeChildrenRelationship: representativeChildren;
  @IsArray()
  readonly representativeChildrenList: representativeChildren;
}
export class UpdateRepresentativeDto extends PartialType(
  CreateRepresentativeDto,
) {}
