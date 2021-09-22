import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookWashPageRoutingModule } from './book-wash-routing.module';

import { BookWashPage } from './book-wash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookWashPageRoutingModule
  ],
  declarations: [BookWashPage]
})
export class BookWashPageModule {}
