import { Component } from '@angular/core';
import { FeaturePayment } from '@governance-demo/feature-payment';
import { SharedUtil } from '@governance-demo/shared-util';
import { ShopDataAccess } from '@governance-demo/shop-data-access';

@Component({
  selector: 'lib-feature-order',
  imports: [],
  templateUrl: './feature-order.html',
  styleUrl: './feature-order.css',
})
export class FeatureOrder {
  readonly baselineDependencies = [FeaturePayment, SharedUtil, ShopDataAccess];
}
