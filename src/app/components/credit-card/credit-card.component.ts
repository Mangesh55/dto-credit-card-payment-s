import { Component, Input } from '@angular/core';
import { ICreditCardPayment } from 'src/app/app.interfaces';

@Component({
  selector: 'app-card-details',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CardDetailsComponent {
  @Input() creditPaymentDetails : ICreditCardPayment[] = [];
  flippedCard =false
  constructor() { }


  flipTheCard() {
    this.flippedCard = !this.flippedCard;
  }
}