import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  search_product: string;
  background: string;
  new_products: any=[];

  constructor(public navCtrl: NavController) {
    this.background="https://via.placeholder.com/500x350.png";
    this.new_products =[
      {image:"https://via.placeholder.com/200x200.png",name:"Pure white water",price:14.25},
      {image:"https://via.placeholder.com/200x200.png",name:"Fish suede mats",price:14.25}
    ]
  }

}
