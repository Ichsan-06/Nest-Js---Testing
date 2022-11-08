import {IsNotEmpty,MaxLength} from 'class-validator'

export class CreateBookDto{
    @IsNotEmpty()
    title:string;

    @IsNotEmpty()
    author:string;

    @IsNotEmpty()
    @MaxLength(2)
    category:string;
}