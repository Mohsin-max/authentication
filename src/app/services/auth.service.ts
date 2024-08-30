import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // private baseUrl = "http://localhost:3000/users";

  registerUser(userDetails: User): Observable<User> {

    return this.http.post<User>('http://localhost:3000/users',userDetails);
  }

  getUser() :Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/users');
  }
}
