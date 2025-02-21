import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../services/users.service';
import { User } from '../entities/user.entity';
import { UserRepository } from '../users/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Registre a entidade User
  providers: [UserService, UserRepository],
  exports: [UserService], // Exporte se necessário em outros módulos
})
export class UsersModule {}
