import { Component } from '@angular/core';
import { FeatureCart } from '@governance-demo/feature-cart';
import { FeatureCheckout } from '@governance-demo/feature-checkout';
import { SharedUi } from '@governance-demo/shared-ui';
import { SharedUtil } from '@governance-demo/shared-util';
import { ShopUi } from '@governance-demo/shop-ui';

@Component({
  selector: 'lib-shop-data-access',
  imports: [],
  templateUrl: './shop-data-access.html',
  styleUrl: './shop-data-access.css',
})
export class ShopDataAccess {
  readonly baselineDependencies = [
    FeatureCart,
    FeatureCheckout,
    SharedUi,
    SharedUtil,
    ShopUi,
  ];
}
