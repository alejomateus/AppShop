import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  search_product: string;
  background: string;
  new_products: any = [];
  recommended_products: any = [];

  constructor(public navCtrl: NavController) {
    this.background = "https://via.placeholder.com/500x350.png";
    this.new_products = [
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
    this.recommended_products = [
      {
        image: "https://via.placeholder.com/100x100.png",
        name: "Cotton printed quilt",
        price: 14.25,
        description:"All cotton wool fabric, protein filber filled, delicate and delicate details"
      },
      {
        image: "https://via.placeholder.com/100x100.png",
        name: "Simple linen stool",
        price: 14.25,
        description:"Pillow surface is a uniform distribu "
      },
      {
        image: "https://via.placeholder.com/100x100.png",
        name: "Cotton printed quilt",
        price: 14.25,
        description:"All cotton wool fabric, protein filber filled, delicate and delicate details"
      },
      {
        image: "https://via.placeholder.com/100x100.png",
        name: "Simple linen stool",
        price: 14.25,
        description:"Pillow surface is a uniform distribu "
      }
    ];
  }
  gotoNewCollection(){
    this.navCtrl.push("NewcollectionPage");
  }
  detailproduct(product:any){
    this.navCtrl.push("DetailproductPage",{product:product});
  }
}
