import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CepModel } from 'src/app/crud-api/models/cep.model';

@Injectable({
  providedIn: 'root'
})
export class CepApiService {

  urlcep: string;
  private searchResults: CepModel[] = [];
  
  constructor(
    private http: HttpClient
   
  ) {
    this.urlcep = `http://leto:8056/api/Cep/v1`; 
   }

   getAllCeps(): Observable<CepModel[]> {
    return this.http.get<CepModel[]>(`${this.urlcep}/obter-todos`);
  }

  getCep(): Observable<CepModel> {
    return this.http.get(`${this.urlcep}/obter-por-cep`);
  }

  editTable(): Observable<CepModel> {
    return this.http.get(`${this.urlcep}/obter-p`);
  }

  deleteCep(cep: string): Observable<CepModel> {
    return this.http.delete(`${this.urlcep}/remover-cep/?cep=${cep}%09`);
  }
  

   
}

  

  


