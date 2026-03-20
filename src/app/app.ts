import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureCart } from '@governance-demo/feature-cart';
import { SharedUi } from '@governance-demo/shared-ui';
import { SharedUtil } from '@governance-demo/shared-util';
import { ShopUi } from '@governance-demo/shop-ui';
import { NxWelcome } from './nx-welcome';

@Component({
  imports: [NxWelcome, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'governance-demo';

  readonly baselineFanout = [FeatureCart, SharedUi, SharedUtil, ShopUi];
}
