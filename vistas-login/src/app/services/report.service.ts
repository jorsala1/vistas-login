import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl =`${environment.protocolo}://${environment.iphost}:${environment.puerto}`;
  }

  public report1(idArea:number): any{
    let url = `${this.baseUrl}/v1/registries/${idArea}`;
    //console.log(url);  
    return this.http.get(url , {      
    });
  }

  public report2(idArea:number): any{
    let url = `${this.baseUrl}/v1/registries2/${idArea}`;  
    return this.http.get(url , {      
    });
  }

  public report3(idArea:number): any{
    let url = `${this.baseUrl}/v1/registries3/${idArea}`;  
    return this.http.get(url , {      
    });
  }

  public report4(idArea:number): any{
    let url = `${this.baseUrl}/v1/registries4/${idArea}`;  
    return this.http.get(url , {      
    });
  }

  public report5(idArea:number): any{
    let url = `${this.baseUrl}/v1/registries5/${idArea}`;  
    return this.http.get(url , {      
    });
  }

  public report6(idArea:number): any{
    let url = `${this.baseUrl}/v1/registries6/${idArea}`;  
    return this.http.get(url , {      
    });
  }

  public report7(idArea:number): any{
    let url = `${this.baseUrl}/v1/registries7/${idArea}`;  
    return this.http.get(url , {      
    });
  }

  public report8(idArea:number): any{
    let url = `${this.baseUrl}/v1/registries8/${idArea}`;  
    return this.http.get(url , {      
    });
  }
  
  public report9(idArea:number): any{
    let url = `${this.baseUrl}/v1/registries9/${idArea}`;  
    return this.http.get(url , {      
    });
  }

  public report10(idArea:number): any{
    let url = `${this.baseUrl}/v1/registries10/${idArea}`;  
    return this.http.get(url , {      
    });
  }
  
  public report11(idArea:number): any{
    let url = `${this.baseUrl}/v1/registries11/${idArea}`;  
    return this.http.get(url , {      
    });
  }

  public report12(idArea:number): any{
    let url = `${this.baseUrl}/v1/registries12/${idArea}`;  
    return this.http.get(url , {      
    });
  }

  public report13(idArea:number): any{
    let url = `${this.baseUrl}/v1/registries13/${idArea}`;  
    return this.http.get(url , {      
    });
  }

  public report14(idArea:number): any{
    let url = `${this.baseUrl}/v1/registries14/${idArea}`;  
    return this.http.get(url , {      
    });
  }

  public report15(idArea:number): any{
    let url = `${this.baseUrl}/v1/registries15/${idArea}`;  
    return this.http.get(url , {      
    });
  }

  public getCategories(): any{
    let url = `${this.baseUrl}/v1/getCategories`;  
    return this.http.get(url , {      
    });
  }

  public getProtectedAreas(valor:number): any{
    
    let url = `${this.baseUrl}/v1/getNamesOfCategory/${Number(valor)}`;
    //console.log(url);  
    return this.http.get(url , {      
    });
  }

  //listado de historial de visitas
  public getProtectedAreasHistory(valor:number): any{
    
    let url = `${this.baseUrl}/v1/allRegistries/${Number(valor)}`;
    //console.log(url);  
    return this.http.get(url , {      
    });
  }

}
