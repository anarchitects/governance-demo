import { Component } from '@angular/core';
import { SharedUtil } from '@governance-demo/shared-util';

@Component({
  selector: 'lib-shop-data-access',
  imports: [],
  templateUrl: './shop-data-access.html',
  styleUrl: './shop-data-access.css',
})
export class ShopDataAccess {
  readonly baselineDependencies = [SharedUtil];
}
