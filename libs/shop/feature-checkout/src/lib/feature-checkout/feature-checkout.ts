import { Component } from '@angular/core';
import { ShopDataAccess } from '@governance-demo/shop-data-access';

@Component({
  selector: 'lib-feature-checkout',
  imports: [],
  templateUrl: './feature-checkout.html',
  styleUrl: './feature-checkout.css',
})
export class FeatureCheckout {
  readonly baselineDependencies = [ShopDataAccess];
}
