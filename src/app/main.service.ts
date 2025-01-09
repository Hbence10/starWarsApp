import { Card } from './.models/card.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  wantedListType: string = '';
  cards: Card[] = [];
  rows : Card[][] = []
  buttonQuantity : number;
  buttonNumbers : number[] = []

  constructor() {}

  setCard(response: any, modelType : string) {
    this.cards = [];
    this.rows = [];

    (response.results as any[]).forEach(element =>
      this.cards.push(new Card(element.name, element.url, modelType, element.uid))
    )

    for(let i : number = 0; i < this.cards.length; i+=3){
      this.rows.push(this.cards.slice(i, i+3))
    }

    this.buttonNumbers = Array(this.buttonQuantity+1).fill(1).map((x, i) => i).slice(1)
    console.log(this.buttonNumbers)
  }
}
