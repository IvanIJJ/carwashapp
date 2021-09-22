import { CartService } from './../../cart.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
 
@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  cart = [];
  items = [];

  sliderConfig  = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.6,

  }

  constructor (private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.items = this.cartService.getProducts();
  }

  addToCart(product){
    this.cartService.addProduct(product); 

    
  }

  openCheckout(){
    this.router.navigate['checkout'];
  }
}
