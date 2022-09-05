import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsNotEmpty } from 'class-validator';
import { CreateAdultDto } from '../../../dtos/adult.dto';

export class CreateRepresentativeDto extends CreateAdultDto {
  @IsArray()
  @IsNotEmpty()
  readonly representativeChildren: Array<Array<string>>;
  @IsArray()
  readonly totalDebs: Array<Array<string>>;
}
export class UpdateRepresentativeDto extends PartialType(
  CreateRepresentativeDto,
) {}
