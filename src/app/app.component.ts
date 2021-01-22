import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { BookService } from './book.service';
import { Book,BookAdapter } from './book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Google Books Search';
  books: Book[] = Array();
  booksObservable$: Observable<Book[]> = new Observable<Book[]>();
  startIndex = 0;


  constructor(private bookService: BookService, private adapter: BookAdapter) {}

  getBooks(newSearch = false) {
    let searchQuery = (<HTMLInputElement>document.getElementById('searchQuery')).value;
    if(searchQuery.length) {
      if(newSearch) this.startIndex = 0;
      this.books = Array();
      const booksObservable$ = this.bookService.getBooks(searchQuery, this.startIndex);
      booksObservable$.subscribe((booksObservable: Book[]) => {
        booksObservable.map(book => {
          this.books.push(this.adapter.adapt(book));
        });
      });  
    }
    return false;
  }

  pageEvent(event: PageEvent) {
    this.startIndex = event.pageIndex*10;
    this.getBooks();
  }

}
