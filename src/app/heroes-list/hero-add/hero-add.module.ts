import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroAddPageRoutingModule } from './hero-add-routing.module';

import { HeroAddPage } from './hero-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroAddPageRoutingModule
  ],
  declarations: [HeroAddPage]
})
export class HeroAddPageModule {}
