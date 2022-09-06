import { PartialType } from '@nestjs/mapped-types';
import { IsArray } from 'class-validator';
import { CreateAdultDto } from '../../../dtos/adult.dto';

export class CreateRepresentativeDto extends CreateAdultDto {
  @IsArray()
  readonly representativeChildren: Array<Array<string | number>>;
}
export class UpdateRepresentativeDto extends PartialType(
  CreateRepresentativeDto,
) {}
