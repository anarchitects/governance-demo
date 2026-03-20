import { Component } from '@angular/core';
import { SharedUi } from '@governance-demo/shared-ui';

@Component({
  selector: 'lib-shop-ui',
  imports: [],
  templateUrl: './shop-ui.html',
  styleUrl: './shop-ui.css',
})
export class ShopUi {
  readonly baselineDependencies = [SharedUi];
}
