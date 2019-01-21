import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {
  segments:any=[];
  brands:any=[];
  brand_products:any=[];
  segmentSelect:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.segments=["brand","personal","shops","fitting"];
    this.segmentSelect= "brand";
    this.brands =[
      {
        name:"Elegant",
        description:"Star designer",
        image:"https://via.placeholder.com/100x100.png"
      },
      {
        name:"Marclano",
        description:"Classic heritage",
        image:"https://via.placeholder.com/100x100.png"
      },
      {
        name:"Zucalli",
        description:"Tile collection",
        image:"https://via.placeholder.com/100x100.png"
      }
    ]
    this.brand_products =[
      {
        name:"Elegant",
        description:"Star designer",
        image:"https://via.placeholder.com/500x200.png",
        logo: "https://via.placeholder.com/100x100.png",
        quantity:120,
        hot:true
      },
      {
        name:"Marclano",
        description:"Classic heritage",
        image:"https://via.placeholder.com/500x200.png",
        logo: "https://via.placeholder.com/100x100.png",
        quantity:130,
        hot:false
      },
      {
        name:"Zucalli",
        description:"Tile collection",
        image:"https://via.placeholder.com/500x200.png",
        logo: "https://via.placeholder.com/100x100.png",
        quantity:150,
        hot:true
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorePage');
  }

}
