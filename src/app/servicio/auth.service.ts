import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../components/interface/usuarios';

@Injectable({ providedIn: 'root' })
export class AuthService {
   private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  login(usuario: string, password: string): boolean {
    return usuario === 'admin' && password === 'admin';
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  
getUserByEmail(email: string): Observable<User[]> {
  return this.http.get<User[]>(`${this.apiUrl}?email=${email}`);
}
}
