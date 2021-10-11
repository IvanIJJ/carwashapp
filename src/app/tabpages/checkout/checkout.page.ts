import { Component, OnInit } from '@angular/core';
import { CartService } from './../../cart.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  selectedItems = [];
  total = 0;


  constructor (private cartService: CartService,  private router: Router) { }

  ngOnInit() {
    let items = this.cartService.getCart();
    console.log(items)
    let selected = {};

    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      }else{ 
        selected[obj.id] = {...obj, count: 1};
      } 
    } 
    this.selectedItems = Object.keys(selected).map(key => selected[key])
    console.log('items:', this.selectedItems);
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price),0 );
  }

}
 