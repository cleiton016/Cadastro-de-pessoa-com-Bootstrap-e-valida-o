import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UfService {

  constructor(private http: HttpClient) { }
  allUf() {
    return this.http.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  }
}
