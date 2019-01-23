import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  products: any = [];
  background: string;
  segments:any=[];
  brands:any=[];
  brand_products:any=[];
  segmentSelect:string;
  user:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.background = "https://via.placeholder.com/500x350.png";
    this.segments=["Bought","Pending","Unpaid"];
    this.segmentSelect= "Bought";
    this.user={
      name:"Owen Davey",
      profile_image:"https://via.placeholder.com/100/FFFF000.png"
    }
    this.products = [
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
  detailproduct(product:any){
    this.navCtrl.push("DetailproductPage",{product:product});
  }
  gotoChat(){
    this.navCtrl.push("ListmessagePage");
  }


}
