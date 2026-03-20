import { Component } from '@angular/core';
import { SharedUtil } from '@governance-demo/shared-util';

@Component({
  selector: 'lib-feature-order',
  imports: [],
  templateUrl: './feature-order.html',
  styleUrl: './feature-order.css',
})
export class FeatureOrder {
  readonly baselineDependencies = [SharedUtil];
}
