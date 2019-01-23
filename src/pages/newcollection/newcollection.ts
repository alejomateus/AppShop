import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewcollectionPage p  age.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newcollection',
  templateUrl: 'newcollection.html',
})
export class NewcollectionPage {
  products_collections:any=[];
  background:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.background = "https://via.placeholder.com/500x350.png";
    this.products_collections = [
      {
        id:1,
        image: "https://via.placeholder.com/500x350.png",
        name: "Cotton pillow",
        description:"Pillow surface is a uniform distribu",
        price: 14.25
      },
      {
        id:2,
        image: "https://via.placeholder.com/500x350.png",
        name: "Cotton pillow",
        description:"Pillow surface is a uniform distribu",
        price: 21.0
      }
    ];
  }
  gotoback(){
    this.navCtrl.pop();
  }


}
