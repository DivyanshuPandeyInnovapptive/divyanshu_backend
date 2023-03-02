import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  myForm: FormGroup;
  books: Book[] = [];

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      bookName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z]*$')]],
      authorName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z]*$')]],
      price: [0, [Validators.max(10000), Validators.min(0), Validators.pattern('^[0-9]*$')]],
      premiumPrice: [0, [Validators.max(10000), Validators.min(0), Validators.pattern('^[0-9]*$')]]
    });
  }

  addBook(form: FormGroup) {
    const newBook: Book = {
      bookName: form.value.bookName,
      authorName: form.value.authorName,
      price: {
        sub_user: Number(form.value.price),
        non_sub_user: Number(form.value.premiumPrice)
      }
    }

    this.books.push(newBook);

    form.reset();
  }

  removeBook(book: Book) {  
    this.books = this.books.filter(bk => {return bk.bookName !== book.bookName});
  }

  addBooks() {

    this.apiService.addBooks(this.books).subscribe(data => {
      // console.log(data);
      this.router.navigate(['/']);
    });
    this.books = [];
  }
}
