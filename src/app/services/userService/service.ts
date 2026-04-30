import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Service {
  private apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient,private router:Router) {}

  // login/authenticate
  login(credentials: {email: string, password: string}): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/authenticate`, credentials).pipe(
      tap((res: any) => localStorage.setItem('token', res.token)) // stocke le token
    );
  }

  // register
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, user, {
        headers: { 'Content-Type': 'application/json' }
    });
}

  // logout
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  // get protected users
  getUsers(): Observable<any[]> {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No JWT token found');

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`${this.apiUrl}/users`, { headers });
  }

  getComptesEnAttente(): Observable<any[]> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.http.get<any[]>('http://localhost:8080/SAL/comptesEnAttente', { headers });
}

validerCompte(userId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`http://localhost:8080/SAL/valider/${userId}`, null, { headers });
  }
}



