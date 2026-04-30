import { Component } from '@angular/core';
import { Menu } from '../../component/menu/menu';
import { RouterLink, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NouvelleFacture } from '../../services/nouvelle-facture';

@Component({
  selector: 'app-pres-gestion-facture',
  imports: [Menu,RouterModule,ReactiveFormsModule,RouterLink],
  templateUrl: './pres-gestion-facture.html',
  styleUrl: './pres-gestion-facture.css'
})
export class PresGestionFacture {

  constructor(private factures:NouvelleFacture){}


  newFacture= new FormGroup({
    typeActeAchat:new FormControl('', Validators.required),
    acteAchat:new FormControl('',Validators.required),
    reception:new FormControl('', Validators.required),
    numFac:new FormControl('',Validators.required),
    dateFac:new FormControl('',Validators.required),
    telechargerFac:new FormControl('',Validators.required),
  })
  submit() {
    if (this.newFacture.invalid) {
      alert("Formulaire invalide !");
      return;
    }
    this.factures.setFacture(this.newFacture.value);
    console.log("Formulaire soumis :", this.newFacture.value);
  }
}
