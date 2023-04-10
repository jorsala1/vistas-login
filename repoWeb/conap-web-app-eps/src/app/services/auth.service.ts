import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl =`${environment.protocolo}://${environment.iphost}:${environment.puerto}`;
  }

  public login(email: any, password: any): any{
    let url = `${this.baseUrl}/v1/login`;  
    return this.http.post(url , {
      email,
      password
    });
  }

  
  

}
