import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Book {
    constructor(
        public Authors: string,
        public Title: string,
        public Description: string,
        public expanded: boolean = false
    ) {}
}

@Injectable({
    providedIn: 'root'
})

export class BookAdapter implements Adapter<Book> {
    adapt(book: any): Book {
        return new Book(book.volumeInfo.authors[0], book.volumeInfo.title, book.volumeInfo.description || "No description available.");
    }
}
