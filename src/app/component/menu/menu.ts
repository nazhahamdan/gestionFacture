import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterModule,RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  menuOuvert: boolean = true;
  profileOuvert=true;
  toggleMenu() {
    this.menuOuvert = !this.menuOuvert;

    if(this.menuOuvert){
      document.body.classList.add('menu-ouvert');
    }
    else{
      document.body.classList.remove('menu-ouvert');
    }
  }

  toggleProfile(){
    this.profileOuvert=!this.profileOuvert;
  }

}
