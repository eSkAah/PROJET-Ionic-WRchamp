import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesListPage } from './heroes-list.page';

const routes: Routes = [
  {
    path: '',
    component: HeroesListPage
  },

  {
    path: 'new',
    loadChildren: () => import('./hero-add/hero-add.module').then( m => m.HeroAddPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./hero/hero.module').then( m => m.HeroPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesListPageRoutingModule {}
