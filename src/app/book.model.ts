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
        let authors = (typeof book.volumeInfo.authors != "undefined") ? book.volumeInfo.authors.join(', ') : 'No Author Provided';

        return new Book(authors, book.volumeInfo.title, book.volumeInfo.description || "No description available.");
    }
}
