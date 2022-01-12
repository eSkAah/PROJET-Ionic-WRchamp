import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroAddPage } from './hero-add.page';

const routes: Routes = [
  {
    path: '',
    component: HeroAddPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroAddPageRoutingModule {}
