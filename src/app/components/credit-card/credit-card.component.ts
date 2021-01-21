import { Component, Input } from '@angular/core';
import { ICreditCardPayment } from 'src/app/app.interfaces';

@Component({
  selector: 'app-card-details',
  templateUrl: './credit-card.component.html',
  styleUrls: ['../../credit-svg.scss','./credit-card.component.scss']
})
export class CardDetailsComponent {
  @Input() creditPaymentDetails : ICreditCardPayment[] = [];
  flippedCard: boolean = false;
  constructor() { }


  flipTheCard() :void{
    this.flippedCard = !this.flippedCard;
  }
}