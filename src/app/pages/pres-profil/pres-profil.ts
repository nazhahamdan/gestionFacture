import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Menu } from '../../component/menu/menu';
import { Utilisateurs } from '../../services/utilisateurs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pres-profil',
  imports: [RouterModule,Menu,CommonModule],
  templateUrl: './pres-profil.html',
  styleUrl: './pres-profil.css'
})
export class PresProfil implements OnInit{
  utilisateur:any;
  constructor(private utilisateurs:Utilisateurs){};
  ngOnInit(): void {
    this.utilisateur=this.utilisateurs.getUtilisateur();
     console.log('Utilisateur:', this.utilisateur);
  }



}
