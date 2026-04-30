import { Service } from './../../services/userService/service';
import { Utilisateurs } from './../../services/utilisateurs';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-nation-marocaine',
  imports: [RouterModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './nation-marocaine.html',
  styleUrl: './nation-marocaine.css'
})
export class NationMarocaine {
  constructor(private utilisateurs:Utilisateurs,private router: Router, private service :Service) {}
  get passwordsMatch(): boolean {
    const motDePasse = this.formulaire.get('MotPasse')?.value;
    const confirmation = this.formulaire.get('confirm_password')?.value;
  return motDePasse === confirmation;
}


  onSubmit() {
  if (this.formulaire.invalid) {
    alert("Formulaire invalide ! Veuillez ressayer.");
    return;
  }

  if (!this.passwordsMatch) {
    alert("Mot de passe et confirmation ne sont pas identiques.");
    return;
  }

  const formData = {
    first_name: this.formulaire.get('Prenom')?.value,
    last_name: this.formulaire.get('Nom')?.value,
    role: this.formulaire.get('Role')?.value,
    email: this.formulaire.get('Email')?.value,
    password: this.formulaire.get('MotPasse')?.value,
    ice :this.formulaire.get('ICE')?.value,

  };

  this.service.register(formData).subscribe({
    next: (response: any) => {
      console.log("Inscription réussie !", response);
      alert("Compte créé avec succès dans ACapsFacture ! Veuillez attendez l'activation de votre compte.");
      this.router.navigate(['/']);
      // Récupérer le token depuis la réponse

      // Navigation selon le rôle

    },

    error: (err) => {
      console.error("Erreur lors de l'inscription :", err);
      alert("Erreur lors de l'inscription. Veuillez réessayer.");
    }
  });
  console.log('ICE:', this.formulaire.get('ICE')?.value);
  console.log('first_name:', this.formulaire.get('Prenom')?.value);
}


  formulaire=new FormGroup({
    Nom: new FormControl(''),
    Prenom:new FormControl('',Validators.required),
    RaisonSociale:new FormControl('',Validators.required),
    Role:new FormControl('',Validators.required),
    IF:new FormControl('',Validators.required),
    ICE:new FormControl('',[Validators.required]),
    CIN:new FormControl('', Validators.required),
    Email:new FormControl('',[Validators.required,Validators.email]),
    NumeroTele:new FormControl(''),
    MotPasse:new FormControl('', Validators.required),
    confirm_password: new FormControl('', Validators.required),
  })

}
