import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPageRoutingModule } from './news-routing.module';
import { HttpService } from '../../services/httpService.service';
import { CommentsComponent} from './comments/comments.component';

import { NewsPage } from './news.page';
import { NewComponent } from './new/new.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsPageRoutingModule,
  ],
  declarations: [NewsPage,CommentsComponent,NewComponent],
  providers:[
    HttpService
  ],
  entryComponents: [
    CommentsComponent,
    NewComponent
  ]

})
export class NewsPageModule {}
