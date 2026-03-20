import { Component } from '@angular/core';
import { FeatureCart } from '@governance-demo/feature-cart';
import { FeatureCheckout } from '@governance-demo/feature-checkout';
import { SharedUi } from '@governance-demo/shared-ui';
import { SharedUtil } from '@governance-demo/shared-util';

@Component({
  selector: 'lib-shop-ui',
  imports: [],
  templateUrl: './shop-ui.html',
  styleUrl: './shop-ui.css',
})
export class ShopUi {
  readonly baselineDependencies = [
    FeatureCart,
    FeatureCheckout,
    SharedUi,
    SharedUtil,
  ];
}
