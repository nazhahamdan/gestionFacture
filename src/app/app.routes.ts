import { RouterModule,Routes } from '@angular/router';
import { Index  } from './pages/index';
import { Inscription } from './pages/inscription/inscription';
import { Connexion } from './pages/connexion/connexion';
import { NgModule } from '@angular/core';
import{NationEtrangere} from './pages/nation-etrangere/nation-etrangere';
import{NationMarocaine} from './pages/nation-marocaine/nation-marocaine';
import { PresAcceuil} from './pages/pres-acceuil/pres-acceuil';
import{ PresTableauBord } from './pages/pres-tableau-bord/pres-tableau-bord';
import{PresGestionFacture} from './pages/pres-gestion-facture/pres-gestion-facture';
import{DetailFacture} from './pages/detail-facture/detail-facture';
import { PresProfil } from './pages/pres-profil/pres-profil';
import { FactureRejete } from './pages/facture-rejete/facture-rejete';
import { SALTableauBord } from './pages/saltableau-bord/saltableau-bord';
import { SALgestionFactures } from './pages/salgestion-factures/salgestion-factures';
import { GestionPrestataire } from './pages/gestion-prestataire/gestion-prestataire';
import { GestionActeAchat } from './pages/gestion-acte-achat/gestion-acte-achat';
import { LogOut } from './pages/log-out/log-out';


export const routes: Routes = [
    {path:'home',component:Index},
    {path:'', redirectTo:'home',pathMatch: 'full'},
    { path:'signUp', component:Inscription },
    {path:'signIn',component:Connexion},
    {path:'marocaine',component:NationMarocaine},
    {path:'etrangere',component:NationEtrangere},
    {path:'prestataireAcceuil',component: PresAcceuil},
    { path: 'prestataireTableauBord', component:  PresTableauBord  },
    {path:'presGestionFacture',component:PresGestionFacture},
    {path:'detailFacture',component:DetailFacture},
    {path:'prestataireProfil',component:PresProfil},
    {path:'factureRejete',component:FactureRejete},
    {path:'SalTableauBord',component:SALTableauBord},
    {path:'SalGestionFacture',component:SALgestionFactures},
    {path:'gestionPrestataires',component:GestionPrestataire},
    {path:'gestiondesActesAchat',component:GestionActeAchat},
    {path:'logOut',component:LogOut},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
