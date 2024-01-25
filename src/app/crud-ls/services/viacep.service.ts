import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CepModel } from '../models/cep.model';

export const KEY_LS = 'formDataList';
export const SEARCH_RESULTS_LS = 'searchResultsList';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {
  urlcep: string;
  private searchResults: CepModel[] = [];
  
  constructor(
    private http: HttpClient
  ) { }

  consultarCep(cep: string): Observable<CepModel> {
    this.urlcep = `https://viacep.com.br/ws/${cep}/json/`; 
    return this.http.get(this.urlcep);
  }
 
  setCEP(cep: CepModel): void {
    const cepString = JSON.stringify(cep);
    localStorage.setItem(KEY_LS, cepString);
  }

  getCEP(): CepModel {
    
    const cepString = localStorage.getItem(KEY_LS);
    return cepString ? JSON.parse(cepString) : [];
  }

  addDataToTable(cep: CepModel) {

    const _cep = this.getCepFromTable(cep.cep)

    if (_cep == null) {
      const ceps = this.getCepsFromTable()
      ceps.push(cep)
      localStorage.setItem('SEARCH_RESULTS_LS', JSON.stringify(ceps));

    } else {
      alert('O CEP já existe na tabela.')
    }

  }

  editTable(cep: CepModel) {
    const ceps = this.getCepsFromTable()
    const index = ceps.findIndex(x=> x.cep == cep.cep)
    if (index == -1) {
      alert('CEP informado não existe.')
    }
    else ceps [index] = cep
    localStorage.setItem('SEARCH_RESULTS_LS', JSON.stringify(ceps));
  }

  //READ ALL
  getCepsFromTable(): CepModel[] {
    const ceps: CepModel[] = JSON.parse(localStorage.getItem('SEARCH_RESULTS_LS') ?? '[]' )
    return ceps;
  }

  //READ BY ID
  getCepFromTable(cep?: string): CepModel | null {
    const ceps: CepModel[] = JSON.parse(localStorage.getItem('SEARCH_RESULTS_LS') ?? '[]' )
    
    const index = ceps.findIndex(x=> x.cep == cep)

    if (index == -1) return null;
    else return ceps [index];
  }
  
  removeItemFromTable(cep?: string) {
    const ceps = this.getCepsFromTable()
    const index = ceps.findIndex(x=> x.cep == cep)

    if (index == -1) {
      alert('CEP já excluído.')
    }
    else ceps.splice(index, 1) 
    localStorage.setItem('SEARCH_RESULTS_LS', JSON.stringify(ceps));
  }

  clearTable() {
    localStorage.removeItem('SEARCH_RESULTS_LS')
  }

}
