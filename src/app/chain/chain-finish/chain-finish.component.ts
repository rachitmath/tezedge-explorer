import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-chain-finish',
  templateUrl: './chain-finish.component.html',
  styleUrls: ['./chain-finish.component.scss']
})
export class ChainFinishComponent implements OnInit {

  public googleanalyticsSlideText = 'ENABLED';

  constructor() { }

  ngOnInit(): void {
  }

  onChangeChaneId(event: MatSlideToggleChange) {
    if (event.checked) {
      this.googleanalyticsSlideText = 'ENABLED';
    } else {
      this.googleanalyticsSlideText = 'DISABLED';
    }
  }
}
