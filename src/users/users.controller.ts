import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body() body: { name: string; email: string; password: string },
  ): Promise<User> {
    return this.usersService.create(body.name, body.email, body.password);
  }
}
