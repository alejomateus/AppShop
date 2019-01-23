import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-listmessage",
  templateUrl: "listmessage.html"
})
export class ListmessagePage {
  segments: any = [];
  brands: any = [];
  brand_products: any = [];
  segmentSelect: string;
  chatsavaible: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.segments = [
      { name: "Store", icon: "ios-chatbubbles-outline" },
      { name: "Logistics", icon: "cube" },
      { name: "Settings", icon: "cog" }
    ];
    this.segmentSelect = "Store";
    this.chatsavaible = [
      {
        id:1,
        image: "https://via.placeholder.com/100x100.png",
        brandName: "Elegant",
        last_message: "I am sorry, this is currentonly time",
        time:10
      },
      {
        id:2,
        image: "https://via.placeholder.com/100x100.png",
        brandName: "Elegant",
        last_message: "I am sorry, this is currentonly time",
        time:10
      },
      {
        id:3,
        image: "https://via.placeholder.com/100x100.png",
        brandName: "Elegant",
        last_message: "I am sorry, this is currentonly time",
        time:10
      }  
    ];
    
  }
  gotoback(){
    this.navCtrl.pop();
  }
}
