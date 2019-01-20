import { Component } from '@angular/core';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabs:any=[];

  constructor() {
    this.tabs=[
      {root: HomePage, title: "Home", icon: "home"},
      {root: HomePage, title: "Store", icon: "home"},
      {root: HomePage, title: "Shopcart", icon: "cart"},
      {root: HomePage, title: "My", icon: "person"},
    ];
  }
}
