import { ProgessTraitement } from './../../component/progess-traitement/progess-traitement';
import { Component,Input, OnInit } from '@angular/core';
import { Menu } from '../../component/menu/menu';
import { RouterModule } from '@angular/router';
import { NouvelleFacture } from '../../services/nouvelle-facture';

@Component({
  selector: 'app-detail-facture',
  imports: [Menu,RouterModule],
  templateUrl: './detail-facture.html',
  styleUrl: './detail-facture.css'
})
export class DetailFacture implements OnInit {
  facture:any;
    constructor(private factures:NouvelleFacture){};
    ngOnInit(): void {
      this.facture=this.factures.getFacture();
       console.log('facture:', this.facture);
    }

    genererRapport(): void {
    const contenu = `🧾 Rapport de traitement des factures

- Facture soumise avec succès : 10/03/2025
- Rejet numérique complété : 11/03/2025

Merci d'utiliser notre système.`;

    const blob = new Blob([contenu], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);

    const lien = document.createElement('a');
    lien.href = url;
    lien.download = 'rapport-traitement.txt';
    lien.click();

    window.URL.revokeObjectURL(url);
  }




}
