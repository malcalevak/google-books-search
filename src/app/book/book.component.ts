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

  totalResults = 1814;//needs actual value
  responseTime = 12;//needs actual value

  pageSize = 10;
  pageIndex = 0;
  showFirstLastButtons = true;

  handlePageEvent(event: PageEvent) {
    this.pageEvent.emit(event);
  }
}
