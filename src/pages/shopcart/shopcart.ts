import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-shopcart',
  templateUrl: 'shopcart.html',
})
export class ShopcartPage {
  select_products: any = [];
  total:number=10;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.select_products = [
      {
        id:1,
        image: "https://via.placeholder.com/100x100.png",
        name: "Cotton printed quilt",
        price: 14.25,
        description:"All cotton wool fabric, protein filber, filled, delicate and delicate details",
        quantity:1,
        characteristics:{
          color:"White",
          size:"M"
        }
      },
      {
        id:2,
        image: "https://via.placeholder.com/100x100.png",
        name: "Simple linen stool",
        price: 14.25,
        description:"Pillow surface is a uniform distribu ",
        quantity:2,
        characteristics:{
          color:"Yellow",
          size:"M"
        }
      },
      {
        id:3,
        image: "https://via.placeholder.com/100x100.png",
        name: "Cotton printed quilt",
        price: 14.25,
        description:"All cotton wool fabric, protein filber, filled, delicate and delicate details",
        quantity:2,
        characteristics:{
          color:"Black",
          size:"M"
        }
      },
      {
        id:4,
        image: "https://via.placeholder.com/100x100.png",
        name: "Simple linen stool",
        price: 14.25,
        description:"Pillow surface is a uniform distribu ",
        quantity:1,
        characteristics:{
          color:"White",
          size:"M"
        }
      }
    ];
    this.calculatefinal();
  }
  calculatefinal(){
    this.total=10;
    this.select_products.forEach((product:any) => {
      if (product.quantity>0)
      this.total+=(product.quantity*product.price);
    });
  }
  modifyquantity(selected_product:any,quantity:number){
    this.select_products.forEach((product:any) => {
      if(selected_product.id == product.id && quantity>0){
        product.quantity= quantity;
      }
    });
    this.calculatefinal();
  }

}
