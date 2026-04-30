import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NouvelleFacture {
  private facture:any;
   setFacture(data:any) {
    this.facture=data;
  }
  getFacture(){
    return this.facture;
  }

}
