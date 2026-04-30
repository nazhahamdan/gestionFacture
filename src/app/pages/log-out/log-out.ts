import { Component } from '@angular/core';
import { Service } from '../../services/userService/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  imports: [],
  templateUrl: './log-out.html',
  styleUrl: './log-out.css'
})
export class LogOut {
  constructor(private authService: Service, private router: Router) {}

  deconnexion() {
    // Supprime le token
    this.authService.logout();
    this.router.navigate(['/home'])
  }

}
