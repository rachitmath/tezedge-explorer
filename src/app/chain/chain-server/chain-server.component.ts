import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chain-server',
  templateUrl: './chain-server.component.html',
  styleUrls: ['./chain-server.component.scss']
})
export class ChainServerComponent implements OnInit {

  public autobakeSlideText = 'DISABLED';
  public chainIdSlideText = 'ENABLED';

  public chainServerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.chainServerForm = this.formBuilder.group({
      hostName: ['127.0.0.1', Validators.required],
      port: ['7545', Validators.required],
      chainId: ['5775', Validators.required],
      autoBake: [false, Validators.required],
      transactionFailure: [true, Validators.required]
    });
  }

  onChangeHostName(event) {
    this.chainServerForm.get('hostName').setValue(event.target.value, {
      onlySelf: true
    });
  }

  onChangeAutoBake(event: MatSlideToggleChange) {
    if (event.checked) {
      this.autobakeSlideText = 'ENABLED';
    } else {
      this.autobakeSlideText = 'DISABLED';
    }

    this.chainServerForm.get('autoBake').setValue(event.checked, {
      onlySelf: true
    });
  }

  onChangeChaneId(event: MatSlideToggleChange) {
    if (event.checked) {
      this.chainIdSlideText = 'ENABLED';
    } else {
      this.chainIdSlideText = 'DISABLED';
    }

    this.chainServerForm.get('transactionFailure').setValue(event.checked, {
      onlySelf: true
    });
  }

  onSubmit() {
    if (this.chainServerForm.valid) {
      console.log(this.chainServerForm.value);
    }
  }
}
