import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuSal } from '../../component/menu-sal/menu-sal';

@Component({
  selector: 'app-saltableau-bord',
  imports: [CommonModule,MenuSal],
  templateUrl: './saltableau-bord.html',
  styleUrl: './saltableau-bord.css'
})
export class SALTableauBord {
  // Tuiles
  totalAchats = 120;
  actionsSAL = 34;
  retards = 7;
  facturesPayees = 88;

  // Graphique factures vs retards
  mois = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  factures = [20, 30, 40, 35, 50];
  retardsMensuels = [5, 8, 6, 3, 7];

  // Graphique volume par statut
  statutLabels = ['En cours', 'Complété', 'Rejeté'];
  statutData = [50, 30, 10];

  // Tableau des actes d’achat
  actesAchat = [
    {
      reference: 'ACH001',
      dateDebut: '2025-01-10',
      statut: 'En cours',
      prestataire: 'Prestataire A',
      procedure: 'Consultation',
      responsable: 'Mr. X'
    },
    {
      reference: 'ACH002',
      dateDebut: '2025-02-01',
      statut: 'Complété',
      prestataire: 'Prestataire B',
      procedure: 'AO',
      responsable: 'Mme. Y'
    }
  ];

  // Activités récentes
  activites = [
    '📤 Dépôt de facture - 01/08/2025',
    '✅ Approbation de paiement - 01/08/2025',
    '❌ Rejet de facture - 31/07/2025',
    '📥 Téléchargement document - 30/07/2025'
  ];
  indicateurs = [
    {
      icone: '🧾',
      titre: 'Actes d’achat',
      valeur: 120,
      description: 'Total des actes enregistrés ou en traitement'
    },
    {
      icone: '🔧',
      titre: 'Actions SAL',
      valeur: 34,
      description: 'Validations, modifications effectuées'
    },
    {
      icone: '⏱️',
      titre: 'Retards',
      valeur: 7,
      description: 'Cas de retards ou tâches en attente'
    },
    {
      icone: '💰',
      titre: 'Factures payées',
      valeur: 88,
      description: 'Factures ayant atteint le paiement'
    }
  ];
}

