import { Component, OnInit } from '@angular/core';
import { ChampionsService } from '../champions.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.page.html',
  styleUrls: ['./heroes-list.page.scss'],
})
export class HeroesListPage implements OnInit {

  champs!: any;

  constructor(
    private champions: ChampionsService
  ) { }

  ngOnInit() {
    this.champions.getAllChampions().subscribe((data: any ) => {
      this.champs = data;
    });
  }

}
