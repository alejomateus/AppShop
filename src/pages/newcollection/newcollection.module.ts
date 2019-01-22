import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewcollectionPage } from './newcollection';

@NgModule({
  declarations: [
    NewcollectionPage,
  ],
  imports: [
    IonicPageModule.forChild(NewcollectionPage),
  ],
})
export class NewcollectionPageModule {}
