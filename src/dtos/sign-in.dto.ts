import { IsString, IsNotEmpty } from 'class-validator';

export class SignInDto {
  @IsString()
  @IsNotEmpty()
  readonly email: string | undefined;

  @IsString()
  @IsNotEmpty()
  readonly password: string | undefined;
}
