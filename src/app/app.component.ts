import { Component, OnInit } from '@angular/core';
import { Card } from './models/card';
import { CardsService } from './cards.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cards: Card[];
  // carro: Carro;
  constructor(private cardService: CardsService) {
    // this.carro = new Carro();
    // this.cardService = new CardsService(this.carro);
  }

  ngOnInit(): void {
    this.obterCards();
  }

  obterCards() {
    this.cards = this.cardService.obterCards();
  }
}
