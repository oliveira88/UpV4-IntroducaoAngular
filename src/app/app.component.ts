import { Component, OnInit } from '@angular/core';
import { Card } from './models/card';
import { CardsService } from './services/cards.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // carro: Carro;
  constructor() {
    // this.carro = new Carro();
    // this.cardService = new CardsService(this.carro);
  }

  ngOnInit(): void {}
}
