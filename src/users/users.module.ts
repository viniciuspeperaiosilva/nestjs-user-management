import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './user.entity'; // Ajuste o caminho conforme necessário
import { UserRepository } from './user.repository'; // Ajuste o caminho conforme necessário

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Registre a entidade User
  providers: [UsersService, UserRepository],
  exports: [UsersService], // Exporte se necessário em outros módulos
})
export class UsersModule {}
