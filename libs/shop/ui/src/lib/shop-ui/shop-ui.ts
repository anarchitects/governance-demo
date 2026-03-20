import { Component } from '@angular/core';
import { SharedUi } from '@governance-demo/shared-ui';
import { SharedUtil } from '@governance-demo/shared-util';
import { ShopDataAccess } from '@governance-demo/shop-data-access';

@Component({
  selector: 'lib-shop-ui',
  imports: [],
  templateUrl: './shop-ui.html',
  styleUrl: './shop-ui.css',
})
export class ShopUi {
  readonly baselineDependencies = [SharedUi, SharedUtil, ShopDataAccess];
}
