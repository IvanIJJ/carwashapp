import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
    {
      category: 'Cars',
      expanded: true,
      products: [
      {id:1, name:'Express', price:'50'},
      {id:2, name:'Delux', price:'50'},
      {id:3, name:'Premuim', price:'50'},
      {id:4, name:'Extras', price:'50'},
      ]
    },
    {
      category:'SUV',
      products:[
        {id:5, name:'Express', price:'50'},
        {id:6, name:'Delux', price:'50'},
        {id:7, name:'Premium', price:'50'},
        {id:8, name:'Extras', price:'50'},
      ]
    },
    {
      category:'Bakkies',
      products:[
        {id:9, name:'Express', price:'50'},
        {id:10, name:'Delux', price:'50'},
        {id:11, name:'Premium', price:'50'},
        {id:12, name:'Extras', price:'50'}
      ]
    },
    {
      category:'Taxis',
      products:[
        {id:13, name:'Express', price:'50'},
        {id:14, name:'Delux', price:'50'},
        {id:15, name:'Premium', price:'50'},
        {id:16, name:'Extras', price:'50'}
      ]
    },
  ];
  private cart = [];

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }
  
  addProduct (product) {
    this.cart.push(product);
  }

}
