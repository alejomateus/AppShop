import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListmessagePage } from './listmessage';

@NgModule({
  declarations: [
    ListmessagePage,
  ],
  imports: [
    IonicPageModule.forChild(ListmessagePage),
  ],
})
export class ListmessagePageModule {}
