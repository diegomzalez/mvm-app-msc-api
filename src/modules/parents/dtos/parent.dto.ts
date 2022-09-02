import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { CreateAdultDto } from '../../../dtos/adult.dto';

export class CreateParentDto extends CreateAdultDto {
  @IsNotEmpty()
  @IsBoolean()
  readonly isAlive: boolean;
  @IsNotEmpty()
  @IsString()
  readonly sex: string;
}
export class UpdateParentDto extends PartialType(CreateParentDto) {}
