import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Menu } from '../../component/menu/menu';

@Component({
  selector: 'app-facture-rejete',
  imports: [RouterModule,Menu],
  templateUrl: './facture-rejete.html',
  styleUrl: './facture-rejete.css'
})
export class FactureRejete {
  selected: number | null = null;

}
