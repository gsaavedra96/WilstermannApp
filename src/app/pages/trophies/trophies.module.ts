import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrophiesPageRoutingModule } from './trophies-routing.module';

import { TrophiesPage } from './trophies.page';
import { PusherServiceProvider } from 'src/app/services/pusherService.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrophiesPageRoutingModule
  ],
  declarations: [TrophiesPage],
  providers:[
    PusherServiceProvider
  ]
})
export class TrophiesPageModule {}
