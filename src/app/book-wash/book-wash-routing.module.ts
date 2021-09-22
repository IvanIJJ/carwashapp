import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookWashPage } from './book-wash.page';

const routes: Routes = [
  {
    path: '',
    component: BookWashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookWashPageRoutingModule {}
