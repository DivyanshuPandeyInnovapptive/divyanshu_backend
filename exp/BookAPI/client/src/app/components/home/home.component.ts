import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  books: Book[];
  constructor(private apiService: ApiService, private router: Router) {
    this.apiService.getBooks().subscribe(result => {
      this.books = result.data.books;
    })
  }

  updateBook(book: Book) {
    this.router.navigate([`updatebook`], {
      queryParams: {
        _id: book._id,
        authorName: book.authorName,
        bookName: book.bookName,
        sub_user: book.price.sub_user,
        non_sub_user: book.price.non_sub_user
      }
  });
  }

  deleteBook(book: Book) {
    this.apiService.deleteBook(book).subscribe(data => {
      this.books = this.books.filter(bk => bk._id !== book._id);
    })
  }
}
