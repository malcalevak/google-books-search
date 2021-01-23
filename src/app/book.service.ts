import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiRoot = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}
  getBooks(query: string, startIndex: number): Observable<any> {
      return this.http
             .get<{ items: Book[] }>(`${this.apiRoot}?q=${query}&startIndex=${startIndex}`)
             .pipe(map(books => books.items || []));
  }

}
