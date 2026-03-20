import { Component } from '@angular/core';
import { FeatureCart } from '@governance-demo/feature-cart';
import { SharedUi } from '@governance-demo/shared-ui';
import { SharedUtil } from '@governance-demo/shared-util';
import { ShopDataAccess } from '@governance-demo/shop-data-access';
import { ShopUi } from '@governance-demo/shop-ui';

@Component({
  selector: 'lib-feature-checkout',
  imports: [],
  templateUrl: './feature-checkout.html',
  styleUrl: './feature-checkout.css',
})
export class FeatureCheckout {
  readonly baselineDependencies = [
    FeatureCart,
    SharedUi,
    SharedUtil,
    ShopDataAccess,
    ShopUi,
  ];
}
