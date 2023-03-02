import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from '../models/Book';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/api/books/';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getBookById(id: string) {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  deleteBook(book: Book) {
    return this.http.delete(`${this.apiUrl}/${book._id}`);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.patch<Book>(`${this.apiUrl}${book._id}`, book, httpOptions);
  }

  addBooks(books: Book[]): Observable<Book[]> {
    const data = { books };
    console.log(data);
    return this.http.post<Book[]>(`${this.apiUrl}`, data, httpOptions);
    
  }
}