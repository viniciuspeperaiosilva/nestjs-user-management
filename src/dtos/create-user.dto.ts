import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string | undefined;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string | undefined;

  @IsString()
  @IsNotEmpty()
  readonly password: string | undefined;
}
