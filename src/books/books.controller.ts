import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth-guard/auth-guard.guard';

@Controller('books')
export class BooksController {
  @UseGuards(AuthGuard)
  @Get('')
  getProfile() {
    return [
      {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasy',
      },
      {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        genre: 'Romance',
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        genre: 'Historical Fiction',
      },
    ];
  }
}
