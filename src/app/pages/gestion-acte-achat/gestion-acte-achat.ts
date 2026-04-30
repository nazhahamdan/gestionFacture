import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuSal } from '../../component/menu-sal/menu-sal';

@Component({
  selector: 'app-gestion-acte-achat',
  imports: [MenuSal,RouterModule],
  templateUrl: './gestion-acte-achat.html',
  styleUrl: './gestion-acte-achat.css'
})
export class GestionActeAchat {

}
