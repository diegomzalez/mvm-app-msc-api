import { PartialType } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';
import { CreateAdultDto } from '../../dto/Adult.dto';

export class CreateParentDto extends CreateAdultDto {
  @IsBoolean()
  readonly isAlive: boolean;

  @IsString()
  readonly sex: string;
}
export class UpdateParentDto extends PartialType(CreateParentDto) {}
