import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
    private books: any[] = []

    getAllBooks(): any[]{
        return this.books;
    }

    createBook(CreateBookDto:CreateBookDto){
        this.books.push(CreateBookDto); 
    } 
}
