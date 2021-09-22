import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  showContent:boolean =true;
  readMoreContent:boolean =false;
  data:any;
  datta:any;


  constructor() { }

  ngOnInit() {
  }

}
