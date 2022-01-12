import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Champions } from 'src/app/models/hero.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  championsRef: AngularFirestoreCollection<Champions>;
  private dbPath = '/champion';

  constructor(
    private db: AngularFirestore
  ){
    this.championsRef = db.collection(this.dbPath);
   }



  getAllChampions(): any {
    return this.championsRef.snapshotChanges().pipe(
      map((changes: any) => changes.map((doc: any) => ({
            id: doc.payload.doc.id,
            ...doc.payload.doc.data()
      })))
    );
  }


  get(id: any): any {
    return new Observable(obs => {
      this.championsRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  updateChampion(champions: Champions): any {
    return new Observable(obs => {
      this.championsRef.doc(champions.id).update(champions);
      obs.next();
    });
  }

  addChampion(champions: Champions): any {
    return new Observable(obs => {
      this.championsRef.add({...champions}).then(() => {
        obs.next();
      });
    });
  }

  deleteChampion(id: any){
    this.db.doc(`champion/${id}`).delete();
  }

  getChampionById(id: any): any {
    return new Observable(obs => {
      this.championsRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }


}
