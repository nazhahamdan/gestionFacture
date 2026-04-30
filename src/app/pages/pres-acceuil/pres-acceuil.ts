import { Component } from '@angular/core';
import { Menu } from '../../component/menu/menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pres-acceuil',
  imports: [Menu,RouterModule],
  templateUrl: './pres-acceuil.html',
  styleUrl: './pres-acceuil.css'
})
export class PresAcceuil {



}
