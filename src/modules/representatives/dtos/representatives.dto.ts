import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateAdultDto } from '../../../dtos/adult.dto';

export class CreateRepresentativeDto extends CreateAdultDto {
  @IsString()
  @IsNotEmpty()
  public readonly relationship: string;
}
export class UpdateRepresentativeDto extends PartialType(
  CreateRepresentativeDto,
) {}
