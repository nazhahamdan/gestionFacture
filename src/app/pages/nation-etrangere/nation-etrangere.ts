import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule,FormControl,Validators, ReactiveFormsModule } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-nation-etrangere',
  imports: [RouterModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './nation-etrangere.html',
  styleUrl: './nation-etrangere.css'
})
export class NationEtrangere {
  constructor(private router: Router) {}
   get passwordsMatch(): boolean {
    const motDePasse = this.formulaire.get('MotPasse')?.value;
    const confirmation = this.formulaire.get('confirm_password')?.value;
  return motDePasse === confirmation;
}
  formulaire=new FormGroup({
    Nom: new FormControl(''),
    Prenom:new FormControl('',Validators.required),
    RaisonSociale:new FormControl('',Validators.required),
    Role:new FormControl('',Validators.required),
    Email:new FormControl('',[Validators.required,Validators.email]),
    NumeroTele:new FormControl(''),
    MotPasse:new FormControl('', Validators.required),
    confirm_password: new FormControl('', Validators.required),
  })

  onSubmit() {
    if (this.formulaire.invalid) {
      alert("Formulaire invalide! veuillez ressayez");
      return;
    }
    if(!this.passwordsMatch){
      alert("Mot de passe et confirmation ne sont pas identiques");
    }
    else{
       alert("Formulaire soumis avec succès !");
    this.router.navigate(['/prestataireAcceuil']);
    }
  }



}
