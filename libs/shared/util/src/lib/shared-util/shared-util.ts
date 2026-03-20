import { Component } from '@angular/core';
import { FeatureCart } from '@governance-demo/feature-cart';
import { FeatureCheckout } from '@governance-demo/feature-checkout';
import { FeatureOrder } from '@governance-demo/feature-order';
import { FeaturePayment } from '@governance-demo/feature-payment';
import { ShopDataAccess } from '@governance-demo/shop-data-access';
import { ShopUi } from '@governance-demo/shop-ui';

@Component({
  selector: 'lib-shared-util',
  imports: [],
  templateUrl: './shared-util.html',
  styleUrl: './shared-util.css',
})
export class SharedUtil {
  readonly baselineDependencies = [
    FeatureCart,
    FeatureCheckout,
    FeatureOrder,
    FeaturePayment,
    ShopDataAccess,
    ShopUi,
  ];
}
