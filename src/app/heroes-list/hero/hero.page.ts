import { Component, OnInit  } from '@angular/core';
import { ChampionsService } from 'src/app/champions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';



@Component({
  selector: 'app-hero',
  templateUrl: './hero.page.html',
  styleUrls: ['./hero.page.scss'],
})
export class HeroPage implements OnInit {

  champ!: any;
  id!: any;
  update!: boolean;

  constructor(
    private champions: ChampionsService,
    private route: ActivatedRoute,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private router: Router

  ) { }

  ngOnInit() {
    this.update = false;
    const champId = this.route.snapshot.paramMap.get('id');
    this.champions.getChampionById(champId).subscribe((value: any) => {
      this.champ = value;
    });
    this.id = champId;
  }


  async setUpdate(){
    if(!this.update) {
      const alert = await this.alertCtrl.create({
        header: 'Voulez vous passer en mode édition ?',
        subHeader: 'Vous allez rendre possible la modification du champion.',
        buttons: [
          {
            text: 'Annuler',
            role: 'Cancel'
          },
          {
            text: 'Confirmer',
            handler: () => {this.update = !this.update;}
          },
        ]
      });

      await alert.present();
    }else{
      this.update = !this.update;
    }
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Vos modifications sont enregistrées',
      duration: 2000
    });
    (await toast).present();
  }

  async presentToastDelete() {
    const toast = this.toastCtrl.create({
      message: 'Le champion a été supprimé.',
      duration: 2000
    });
    (await toast).present();
  }

  updateChamp() {
    this.champions.updateChampion(this.champ).subscribe(() => {
      this.presentToast();
      this.update = false;
    });
  }

  goDelete(id: any) {
    this.champions.deleteChampion(id);
    this.presentToastDelete();
    this.router.navigate(['/tab/heroes']);
  }




}
