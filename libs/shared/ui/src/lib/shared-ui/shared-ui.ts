import { Component } from '@angular/core';
import { SharedUtil } from '@governance-demo/shared-util';

@Component({
  selector: 'lib-shared-ui',
  imports: [],
  templateUrl: './shared-ui.html',
  styleUrl: './shared-ui.css',
})
export class SharedUi {
  readonly baselineDependencies = [SharedUtil];
}
