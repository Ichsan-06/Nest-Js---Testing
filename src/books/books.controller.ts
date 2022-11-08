import { Body, Controller, Get, Param, Post, Query, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {

    private booksService : BooksService

    constructor(booksService:BooksService){
        this.booksService = booksService
    }

    @Get()
    getAllBooks(@Query('title') title:string){
        // console.log(title)
        return this.booksService.getAllBooks();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBook(
        @Body() CreateBookDto:CreateBookDto
    ){
        // console.log(CreateBookDto)
        return this.booksService.createBook(CreateBookDto);
    }
}
