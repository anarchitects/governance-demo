import { Component } from '@angular/core';
import { FeatureCart } from '@governance-demo/feature-cart';
import { FeatureCheckout } from '@governance-demo/feature-checkout';
import { FeatureOrder } from '@governance-demo/feature-order';
import { FeaturePayment } from '@governance-demo/feature-payment';
import { ShopUi } from '@governance-demo/shop-ui';

@Component({
  selector: 'lib-shared-ui',
  imports: [],
  templateUrl: './shared-ui.html',
  styleUrl: './shared-ui.css',
})
export class SharedUi {
  readonly baselineDependencies = [
    FeatureCart,
    FeatureCheckout,
    FeatureOrder,
    FeaturePayment,
    ShopUi,
  ];
}
