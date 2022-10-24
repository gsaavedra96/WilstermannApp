import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsPage } from './news.page';
import { CommentsComponent} from './comments/comments.component';
import { NewComponent} from './new/new.component';

const routes: Routes = [
  {
    path: '',
    component: NewsPage
  },
  {
    path: 'comment/:id',
    component: CommentsComponent,
    //canActivate: [LoggedGuard]
  },
  {
    path: 'post',
    component: NewComponent,
    //canActivate: [LoggedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsPageRoutingModule {}
