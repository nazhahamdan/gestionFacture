import { Component,Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-progess-traitement',
  imports: [RouterModule],
  templateUrl: './progess-traitement.html',
  styleUrl: './progess-traitement.css'
})
export class ProgessTraitement {
  @Input() currentStep: number = 0;

  steps = [
    'Facture Numérique Déposée',
    'FN Validée',
    'FP Déposée',
    'Traitement FP en cours',
    'Traitement Validé'
  ];

}
