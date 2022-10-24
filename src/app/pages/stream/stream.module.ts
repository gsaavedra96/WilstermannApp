import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StreamPageRoutingModule } from './stream-routing.module';
//import { StreamingMedia } from '@ionic-native/streaming-media';

import { StreamPage } from './stream.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StreamPageRoutingModule
  ],
  declarations: [StreamPage],
  providers:[
    //StreamingMedia
  ]
})
export class StreamPageModule {}
