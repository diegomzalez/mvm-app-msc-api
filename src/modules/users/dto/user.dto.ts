import { CreatePersonDto } from '../../../dto/person.dto';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
export class CreateUserDto extends CreatePersonDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
export class UpdateUserDto extends PartialType(CreateUserDto) {}
