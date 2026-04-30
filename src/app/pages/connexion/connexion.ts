import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Service } from '../../services/userService/service';
import { FormsModule } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-connexion',
  imports: [RouterModule, FormsModule],
  templateUrl: './connexion.html',
  styleUrls: ['./connexion.css'],
})
export class Connexion {
  email = '';
  password = '';

  constructor(private authService: Service, private router: Router) {}

  login() {
    this.authService.login({ email: this.email, password: this.password })
      .subscribe({
        next: (res: any) => {
          localStorage.setItem('token', res.token);
          alert('Connexion réussie !');

          const decoded: any = jwtDecode(res.token);
          console.log('Contenu complet du token décodé :', decoded);

          const role = decoded.role;
          console.log('Valeur exacte du rôle :', role);

          switch (role) {
            case 'ROLE_PRESTATAIRE':
              this.router.navigate(['/prestataireAcceuil']);
              break;
            case 'ROLE_SAL':
              this.router.navigate(['/SalTableauBord']);
              break;
            case 'ROLE_SBC':
              this.router.navigate(['/SbcAcceuil']);
              break;
            default:
              this.router.navigate(['/']);
              break;
          }
        },
        error: (err) => {
          console.error('Erreur de connexion :', err);
          if (err.error && typeof err.error === 'string' && err.error.includes('validé')) {
            alert('Votre compte n’a pas encore été validé par l’administration SAL.');
          } else {
            alert('Email ou mot de passe incorrect.');
          }
        }
      });
  }
}
