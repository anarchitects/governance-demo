import { Component } from '@angular/core';
import { FeatureCheckout } from '@governance-demo/feature-checkout';
import { ShopDataAccess } from '@governance-demo/shop-data-access';

@Component({
  selector: 'lib-feature-cart',
  imports: [],
  templateUrl: './feature-cart.html',
  styleUrl: './feature-cart.css',
})
export class FeatureCart {
  readonly baselineDependencies = [FeatureCheckout, ShopDataAccess];
}
