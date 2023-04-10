import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.protocolo}://${environment.iphost}:${environment.puerto}`;
  }

  public getUsers(): any {
    let url = `${this.baseUrl}/v1/user`;
    return this.http.get(url, {
    });
  }


  public createUser(name:string, email:string, password:string, age:number, roleId:number, genderId:number, nacionalityId:number): any {
    let url = `${this.baseUrl}/v1/user`;
    return this.http.post(url, {
      name,
      email,
      password,
      age,
      roleId,
      genderId,
      nacionalityId
    });
  }

  public registerVisit(idArea: Number,
    paisResidencia: String,
    nombre: String,
    nacionalidad: String,
    departamentoGuatema: String,
    genero: String,
    edad: String,
    motivoVisita: String,
    motivoVisitaOtro: String,
    ActividadesRealizar: String,
    ActividadesRealizarOtro: String,
    conocimientoArea: String,
    conocimientoAreaOtro: String,
    comoViaja: String,
    comoViajaOtro: String): any {
    let url = `${this.baseUrl}/v1/registerVisit/`;
    return this.http.post(url, {
      idArea,
      paisResidencia,
      nombre,
      nacionalidad,
      departamentoGuatema,
      genero,
      edad,
      motivoVisita,
      motivoVisitaOtro,
      ActividadesRealizar,
      ActividadesRealizarOtro,
      conocimientoArea,
      conocimientoAreaOtro,
      comoViaja,
      comoViajaOtro
    });
  }

}
