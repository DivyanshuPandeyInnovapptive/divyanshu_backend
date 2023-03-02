import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  myForm: FormGroup;
  bookId: number;

  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      bookName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z]*$')]],
      authorName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z]*$')]],
      price: [0, [Validators.max(10000), Validators.min(0), Validators.pattern('^[0-9]*$')]],
      premiumPrice: [0, [Validators.max(10000), Validators.min(0), Validators.pattern('^[0-9]*$')]]
    });

    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.bookId = params['_id'];
      this.myForm.patchValue({
        bookName: params['bookName'],
        authorName: params['authorName'],
        price: params['sub_user'],
        premiumPrice: params['non_sub_user']
      })
    });
  }

  onSubmit(form: FormGroup) {

    const newBook: Book = {
      _id: String(this.bookId),
      bookName: form.value.bookName,
      authorName: form.value.authorName,
      price: {
        sub_user: Number(form.value.price),
        non_sub_user: Number(form.value.premiumPrice)
      }
    }

    this.apiService.updateBook(newBook).subscribe(data => {
      console.log(data);
      this.router.navigate(['/']);
    });
  }
}
