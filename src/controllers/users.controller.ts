import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from '../services/users.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Get('name/:firstName/:lastName')
  async findByName(
    @Param('firstName') firstName: string,
    @Param('lastName') lastName: string,
  ): Promise<User[]> {
    return this.userService.findByName(firstName, lastName);
  }
}
