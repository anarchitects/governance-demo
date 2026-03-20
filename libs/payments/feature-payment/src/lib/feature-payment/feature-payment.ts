import { Component } from '@angular/core';
import { SharedUtil } from '@governance-demo/shared-util';

@Component({
  selector: 'lib-feature-payment',
  imports: [],
  templateUrl: './feature-payment.html',
  styleUrl: './feature-payment.css',
})
export class FeaturePayment {
  readonly baselineDependencies = [SharedUtil];
}
