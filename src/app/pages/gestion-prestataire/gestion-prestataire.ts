import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuSal } from '../../component/menu-sal/menu-sal';
import { Service } from '../../services/userService/service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-prestataire',
  imports: [RouterModule, MenuSal,CommonModule],
  templateUrl: './gestion-prestataire.html',
  styleUrls: ['./gestion-prestataire.css']
})
export class GestionPrestataire implements OnInit {
  comptes: any[] = [];
  loading = true;

  constructor(private userService: Service) {}

  ngOnInit() {
    this.loadComptes();
  }

  loadComptes() {
    this.userService.getComptesEnAttente().subscribe({
      next: (data) => {
        this.comptes = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des comptes :', err);
        this.loading = false;
      }
    });
  }

  validerCompte(userId: number) {
  // Demander confirmation à l'utilisateur
  const confirmation = window.confirm("Voulez-vous vraiment valider ce compte ?");

  if (!confirmation) {
    return; // si l'utilisateur clique sur "Annuler", on arrête
  }

  // Sinon, appeler le service pour valider
  this.userService.validerCompte(userId).subscribe({
    next: (res) => {
      alert(res); // message succès
      // retirer le compte validé de la liste
      this.comptes = this.comptes.filter(u => u.id !== userId);
    },
    error: (err) => console.error('Erreur lors de la validation :', err)
  });
}
}
