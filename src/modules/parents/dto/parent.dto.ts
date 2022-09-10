import { PartialType } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { CreateAdultDto } from '../../../dto/adult.dto';

export class CreateParentDto extends CreateAdultDto {
  @IsNotEmpty()
  @IsBoolean()
  readonly isAlive: boolean;
  @IsNotEmpty()
  @IsString()
  readonly sex: string;
}
export class UpdateParentDto extends PartialType(CreateParentDto) {}
