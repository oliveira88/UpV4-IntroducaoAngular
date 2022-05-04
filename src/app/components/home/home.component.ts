import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from 'src/app/models/card';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private cardService: CardsService) {}

  cards: Card[];
  subscriptions: Array<Subscription>;

  ngOnInit(): void {
    this.obterCards();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    //NÃO DEIXAR MEMORY LEAK
  }

  obterCards() {
    const sub = this.cardService
      .obterCards()
      .pipe(map(r => r.data))
      .subscribe(response => {
        this.cards = response;
      });
    console.log('OQUE SERA QUE PRINTOU ?:', this.cards);
    this.subscriptions.push(sub);
  }
}
