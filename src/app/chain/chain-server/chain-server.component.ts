import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-chain-server',
  templateUrl: './chain-server.component.html',
  styleUrls: ['./chain-server.component.scss']
})
export class ChainServerComponent implements OnInit {

  public autobakeSlideText = 'DISABLED';
  public chainIdSlideText = 'ENABLED';

  constructor() { }

  ngOnInit(): void {
  }

  onChangeAutoBake(event: MatSlideToggleChange) {
    if (event.checked) {
      this.autobakeSlideText = 'ENABLED';
    } else {
      this.autobakeSlideText = 'DISABLED';
    }
  }

  onChangeChaneId(event: MatSlideToggleChange) {
    if (event.checked) {
      this.chainIdSlideText = 'ENABLED';
    } else {
      this.chainIdSlideText = 'DISABLED';
    }
  }
}
