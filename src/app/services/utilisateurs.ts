import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Utilisateurs {
  private utilisateurs:any;
  setUtilisateur(data:any) {
    this.utilisateurs=data;
  }
  getUtilisateur(){
    return this.utilisateurs; 
  }
}
