import { Controller, Get, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users.module';

@Controller()
export class AppController {
  @Get()
  getRoot(): string {
    return 'Hello, World!';
  }
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        console.log('Database Configurations:');
        console.log('Host:', process.env.TYPEORM_HOST);
        console.log('Port:', process.env.TYPEORM_PORT);
        console.log('Username:', process.env.TYPEORM_USERNAME);
        console.log('Password:', process.env.TYPEORM_PASSWORD);
        console.log('Database:', process.env.TYPEORM_DATABASE);
        return {
          type: 'postgres',
          host: process.env.TYPEORM_HOST,
          port: parseInt(process.env.TYPEORM_PORT || '5432', 10),
          username: process.env.TYPEORM_USERNAME,
          password: process.env.TYPEORM_PASSWORD,
          database: process.env.TYPEORM_DATABASE,
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
        };
      },
    }),
    UsersModule,
  ],
  controllers: [AppController],
})
export class AppModule {}