import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity'; // Ajuste o caminho conforme necessário

@Injectable() // Decorador que marca a classe como um serviço injetável
export class UsersService {
  constructor(
    @InjectRepository(User) // Decorador aplicado ao parâmetro do construtor
    private readonly userRepository: Repository<User>, // Propriedade que armazena o repositório
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
  async findByEmail(email: string): Promise<User | null> {
    return (await this.userRepository.findOne({ where: { email } })) || null;
  }
}
