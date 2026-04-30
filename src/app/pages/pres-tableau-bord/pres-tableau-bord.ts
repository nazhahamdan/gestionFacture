import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Menu } from '../../component/menu/menu';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pres-tableau-bord',
  imports: [RouterModule,Menu,FormsModule],
  templateUrl: './pres-tableau-bord.html',
  styleUrl: './pres-tableau-bord.css'
})
export class PresTableauBord {

  selectedDate: string = '';

  factures = [
    { reference: 'F001', dateOS: '2024-06-01', libelle: 'Acte 1', montant: '10000 DH' },
    { reference: 'F002', dateOS: '2024-07-01', libelle: 'Acte 2', montant: '5000 DH' },
    { reference: 'F003', dateOS: '2024-06-01', libelle: 'Acte 3', montant: '7000 DH' },
    { reference: 'F004', dateOS: '2024-08-15', libelle: 'Acte 4', montant: '8000 DH' }
  ];

  facturesFiltrees = [...this.factures];

  filtrerFactures() {
    if (!this.selectedDate) {
      this.facturesFiltrees = [...this.factures];
      return;
    }

    this.facturesFiltrees = this.factures.filter(f =>
      f.dateOS === this.selectedDate
    );
  }


}
