import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
   // Dclaration de la route pour afficher le module TAB qui va gérer
    // nos autres routes
    path: 'tab',
    component: TabPage,
    //Déclaration des autres routes, ainsi que leurs PATHS
    children: [
      {
        path: 'heroes',
        loadChildren: () => import('../heroes-list/heroes-list.module')
        .then( m => m.HeroesListPageModule)
      },

      {
        path: 'about',
        loadChildren: () => import('../about/about.module')
        .then( m => m.AboutPageModule)
      },

      {
        path: 'hero-add',
        loadChildren: () => import('../heroes-list/hero-add/hero-add.module')
        .then( m => m.HeroAddPageModule)
      },

      {
        path: 'home',
        loadChildren: () => import('../home/home.module')
        .then( m => m.HomePageModule)
      },
    ]
  },

  {
    path:'',
    redirectTo: '/tab/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
