import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ChampionsService } from 'src/app/champions.service';
import { Champions } from 'src/app/models/hero.model';

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.page.html',
  styleUrls: ['./hero-add.page.scss'],
})
export class HeroAddPage implements OnInit {

  public champ!: Champions;

  constructor(
    private champions: ChampionsService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.champ = new Champions();
  }

  async presentToast(){
    const toast = this.toastCtrl.create({
      message: 'Nouveau héro ajouté',
      duration: 3000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/tabs/heroes']);
      });
    });
  }

  addChampion(){
    this.champions.addChampion(this.champ).subscribe(() => {
      this.champ = new Champions();
      this.presentToast();
    });

  }

}
