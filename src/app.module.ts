import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BooksController } from './books/books.controller';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, BooksController],
  providers: [AppService],
})
export class AppModule {}
