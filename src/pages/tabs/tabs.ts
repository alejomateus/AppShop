import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { StorePage } from '../store/store';
import { ShopcartPage } from '../shopcart/shopcart';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabs:any=[];

  constructor() {
    this.tabs=[
      {root: HomePage, title: "Home", icon: "home"},
      {root: StorePage, title: "Store", icon: "basket"},
      {root: ShopcartPage, title: "Shopcart", icon: "cart"},
      {root: HomePage, title: "My", icon: "person"},
    ];
  }
}
