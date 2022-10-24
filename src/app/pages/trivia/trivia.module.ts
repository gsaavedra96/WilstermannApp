import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TriviaPageRoutingModule } from './trivia-routing.module';
//import { StreamingMedia } from '@ionic-native/streaming-media';

import { TriviaPage } from './trivia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TriviaPageRoutingModule
  ],
  declarations: [TriviaPage],
  providers:[
    //StreamingMedia
  ]
})
export class TriviaPageModule {}
