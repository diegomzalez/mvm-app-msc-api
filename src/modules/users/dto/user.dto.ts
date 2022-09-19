import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

import { CreatePersonDto } from '../../../dto/Person.dto';

export class CreateUserDto extends CreatePersonDto {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class FilterUserDto extends UpdateUserDto {}
