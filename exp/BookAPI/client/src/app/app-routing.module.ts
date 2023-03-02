import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'addbook', component: AddBookComponent},
  {path: 'updatebook', component: UpdateBookComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
