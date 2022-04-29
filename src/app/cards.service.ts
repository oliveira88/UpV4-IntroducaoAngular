import { Injectable } from '@angular/core';
import { Card } from './models/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  constructor() {}

  obterCards(): Card[] {
    let url = 'meuservidor.com';
    //...
    return [
      { titulo: 'Vagas Java', descricao: 'sim' },
      { titulo: 'Vagas C#', descricao: 'nao' },
      { titulo: 'Vagas Node', descricao: 'talvez' },
      { titulo: 'Vagas Node', descricao: 'talvez' }
    ];
  }
}
