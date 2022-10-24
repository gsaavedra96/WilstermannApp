import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrophiesPage } from './trophies.page';

const routes: Routes = [
  {
    path: '',
    component: TrophiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrophiesPageRoutingModule {}
