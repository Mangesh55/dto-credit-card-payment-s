import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FetchCreditCardService } from 'src/app/service/payment-details.service';
import { CreditCardDetailsComponent} from './credit-card-details.component';
const routes: Routes = [
  {
    path: '',
    component: CreditCardDetailsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [CreditCardDetailsComponent],
  providers:[FetchCreditCardService]
})
export class CreditCardModule {}