import { Component } from '@angular/core';
import { FeatureCheckout } from '@governance-demo/feature-checkout';
import { FeatureOrder } from '@governance-demo/feature-order';
import { FeaturePayment } from '@governance-demo/feature-payment';
import { SharedUi } from '@governance-demo/shared-ui';
import { SharedUtil } from '@governance-demo/shared-util';
import { ShopDataAccess } from '@governance-demo/shop-data-access';
import { ShopUi } from '@governance-demo/shop-ui';

@Component({
  selector: 'lib-feature-cart',
  imports: [],
  templateUrl: './feature-cart.html',
  styleUrl: './feature-cart.css',
})
export class FeatureCart {
  readonly baselineDependencies = [
    FeatureCheckout,
    FeatureOrder,
    FeaturePayment,
    SharedUi,
    SharedUtil,
    ShopDataAccess,
    ShopUi,
  ];
}
