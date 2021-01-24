import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})

export class BookComponent {

  @Input() books: Book[] = new Array;
  @Output() pageEvent = new EventEmitter<PageEvent>();

  responseTime = 0;//needs actual value

  pageSize = 10;
  pageIndex = 0;

  handlePageEvent(event: PageEvent) {
    this.pageEvent.emit(event);
    this.pageIndex = event.pageIndex;
  }
}
