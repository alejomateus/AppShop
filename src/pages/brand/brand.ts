import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-brand",
  templateUrl: "brand.html"
})
export class BrandPage {
  brand: any;
  products_brand:any =[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.brand = {
      name: "Elegant",
      description: "Star designer",
      large_description:
        "Gues design concept-based, launched a moreso-phisticated, charming high-end derivate, brand",
      image: "https://via.placeholder.com/100x100.png",
      coverImage: "https://via.placeholder.com/500x200.png",
    };
    this.products_brand = [
      {
        image: "https://via.placeholder.com/200x200.png",
        name: "Pure white water",
        description:"Pillow surface is a uniform distribu",
        price: 14.25
      },
      {
        image: "https://via.placeholder.com/200x200.png",
        name: "Fish suede mats",
        description:"Pillow surface is a uniform distribu",
        price: 21.0
      }
    ];
  }
  ionViewWillEnter(){
    this.brand = {
      name: "Elegant",
      description: "Star designer",
      large_description:
        "Gues design concept-based, launched a moreso-phisticated, charming high-end derivate, brand",
      image: "https://via.placeholder.com/100x100.png",
      coverImage: "https://via.placeholder.com/500x200.png",
    };
    this.products_brand = [
      {
        image: "https://via.placeholder.com/200x200.png",
        name: "Pure white water",
        description:"Pillow surface is a uniform distribu",
        price: 14.25
      },
      {
        image: "https://via.placeholder.com/200x200.png",
        name: "Fish suede mats",
        description:"Pillow surface is a uniform distribu",
        price: 21.0
      },
      {
        image: "https://via.placeholder.com/200x200.png",
        name: "Pure white water",
        description:"Pillow surface is a uniform distribu",
        price: 14.25
      },
      {
        image: "https://via.placeholder.com/200x200.png",
        name: "Fish suede mats",
        description:"Pillow surface is a uniform distribu",
        price: 21.0
      }
    ];
  }
  gotoback(){
    this.navCtrl.pop();
  }
}
