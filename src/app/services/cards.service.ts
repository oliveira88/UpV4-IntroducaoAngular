import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { Retorno } from '../models/retorno';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class CardsService {
  constructor(private http: HttpClient) {}

  obterCards(): Observable<Retorno<Card[]>> {
    const url = 'assets/retorno.json';
    const response = this.http.get<Retorno<Card[]>>(url);
    return response;
  }
}
