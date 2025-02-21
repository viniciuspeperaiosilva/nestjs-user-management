import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { SignInDto } from '../dtos/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async signIn(
    @Body() signInDto: SignInDto,
  ): Promise<{ access_token: string }> {
    if (!signInDto.email || !signInDto.password) {
      throw new BadRequestException('Email and password must be provided');
    }
    return this.authService.signIn(signInDto.email, signInDto.password);
  }
}
