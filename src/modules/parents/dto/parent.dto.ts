import { PartialType } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsString } from 'class-validator';
import Student from 'src/modules/students/entity/Student.entity';
import { CreateAdultDto } from '../../dto/Adult.dto';

export class CreateParentDto extends CreateAdultDto {
  @IsBoolean()
  readonly isAlive: boolean;

  @IsString()
  readonly sex: string;

  @IsArray()
  readonly children: Student[];
}
export class UpdateParentDto extends PartialType(CreateParentDto) {}
