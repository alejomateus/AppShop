import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailproduct',
  templateUrl: 'detailproduct.html',
})
export class DetailproductPage {
  product: any;
  selected_product: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = {
      id: 1,
      image: "https://via.placeholder.com/300x400.png",
      name: "Cotton pillow",
      description: "Pillow surface is a uniform distribution",
      price: 21.0,
      characteristics: {
        colors: [
          { id: 1, name: "white", value: "#fff" },
          { id: 2, name: "black", value: "#000" },
          { id: 3, name: "blue", value: "#566a8c" },
          { id: 4, name: "cafe", value: "#846130" },
        ],
        size: [
          { id: 1, value: "S" },
          { id: 2, value: "M" },
          { id: 3, value: "L" },
          { id: 4, value: "XL" },
        ],
      },
      quantity:2
    }
  }

  ionViewWillEnter() {
    this.selected_product = this.navParams.get("product");
     this.product = {
      id: 1,
      image: "https://via.placeholder.com/300x400.png",
      name: "Cotton pillow",
      description: "Pillow surface is a uniform distribution",
      price: 21.0,
      characteristics: {
        colors: [
          { id: 1, name: "red", value: "red" },
          { id: 2, name: "black", value: "#000" },
          { id: 3, name: "blue", value: "#566a8c" },
          { id: 4, name: "cafe", value: "#846130" },
        ],
        size: [
          { id: 1, value: "S" },
          { id: 2, value: "M" },
          { id: 3, value: "L" },
          { id: 4, value: "XL" },
        ],
      },
      quantity:2
    }
  }
  gotoback(){
    this.navCtrl.pop();
  }
  modifyquantity(quantity:number){
        this.product.quantity= quantity;
  }
}
