import { Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  userRepository: any;
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(user: User): User {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.userRepository.save(user);
  }
}
