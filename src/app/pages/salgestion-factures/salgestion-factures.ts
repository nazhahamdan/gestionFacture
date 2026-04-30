import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuSal } from '../../component/menu-sal/menu-sal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-salgestion-factures',
  standalone: true,
  imports: [RouterModule, MenuSal, CommonModule, FormsModule],
  templateUrl: './salgestion-factures.html',
  styleUrl: './salgestion-factures.css'
})
export class SALgestionFactures {

  selectedType = '';

  factures = [
    { reference: 'FAC001', date: '2025-08-01', prestataire: 'Prestataire A', montant: 1200, type: 'caisse', statut: 'payée' },
    { reference: 'FAC002', date: '2025-08-03', prestataire: 'Prestataire B', montant: 850, type: 'cheque', statut: 'rejetée' },
    { reference: 'FAC003', date: '2025-08-05', prestataire: 'Prestataire C', montant: 670, type: 'normale', statut: 'validée' },
    { reference: 'FAC004', date: '2025-08-06', prestataire: 'Prestataire D', montant: 300, type: 'charges', statut: 'payée' },
  ];

  filteredFactures() {
    if (!this.selectedType) return this.factures;
    return this.factures.filter(f => f.type === this.selectedType);
  }

  validerFacture(facture: any) {
    facture.statut = 'validée';
    alert(`✅ Facture ${facture.reference} validée`);
  }

  rejeterFacture(facture: any) {
    const reason = prompt(`Raison du rejet de ${facture.reference} :`);
    if (reason) {
      facture.statut = 'rejetée';
      alert(`❌ Facture ${facture.reference} rejetée.\nRaison : ${reason}`);
    }
  }

  voirDetails(facture: any) {
    alert(`📄 Détails de ${facture.reference} :\nPrestataire : ${facture.prestataire}\nMontant : ${facture.montant} MAD\nType : ${facture.type}\nStatut : ${facture.statut}`);
  }

  rattacherFacture(facture: any) {
    alert(`🔗 Rattachement de la facture ${facture.reference} à un acte d'achat...`);
  }

  genererDecompte(facture: any) {
    alert(`🧾 Décompte électronique généré pour ${facture.reference}`);
  }

  get totalFactures() {
    return this.factures.length;
  }

  get facturesPayees() {
    return this.factures.filter(f => f.statut === 'payée').length;
  }

  get facturesValidees() {
    return this.factures.filter(f => f.statut === 'validée').length;
  }

  get facturesRejetees() {
    return this.factures.filter(f => f.statut === 'rejetée').length;
  }
}

