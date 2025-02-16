import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  // Método signIn removido, já que ele não está implementado
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  signIn(_username: any, _password: any) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    pass: string,
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.usersService.findByEmail(email); // ✅ Corrigido: agora usa `await`

    if (!user) {
      return null; // Se o usuário não for encontrado, retorna `null`
    }

    const isPasswordValid = await bcrypt.compare(pass, user.password); // Verifica se a senha é válida

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials'); // Lança exceção se a senha estiver errada
    }

    // Desestruturando para remover a senha antes de retornar o usuário
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user; // Exclui a senha do resultado

    return result; // Retorna o usuário sem a senha
  }

  login(user: User) {
    const payload = { email: user.email, sub: user.id }; // Cria o payload do JWT
    return {
      access_token: this.jwtService.sign(payload), // Retorna o token JWT
    };
  }
}
