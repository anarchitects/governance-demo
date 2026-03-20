import { Component } from '@angular/core';
import { FeatureOrder } from '@governance-demo/feature-order';
import { SharedUi } from '@governance-demo/shared-ui';
import { ShopUi } from '@governance-demo/shop-ui';

@Component({
  selector: 'lib-feature-payment',
  imports: [],
  templateUrl: './feature-payment.html',
  styleUrl: './feature-payment.css',
})
export class FeaturePayment {
  readonly baselineDependencies = [FeatureOrder, SharedUi, ShopUi];
}
