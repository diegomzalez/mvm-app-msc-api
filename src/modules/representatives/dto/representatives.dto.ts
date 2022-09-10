import { PartialType } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import { CreateAdultDto } from '../../../dto/adult.dto';

export class CreateRepresentativeDto extends CreateAdultDto {
  @IsArray()
  readonly representativeChildren: Array<Array<string | number>>;
}
export class UpdateRepresentativeDto extends PartialType(
  CreateRepresentativeDto,
) {}
