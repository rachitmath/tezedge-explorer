import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-chain-server',
  templateUrl: './chain-server.component.html',
  styleUrls: ['./chain-server.component.scss']
})
export class ChainServerComponent implements OnInit {

  public autobakeSlideText = 'DISABLED';
  public chainIdSlideText = 'ENABLED';

  public chainServerForm: FormGroup;

  public onDestroy$ = new Subject();
  public chainServerFormData;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.chainServerForm = this.formBuilder.group({
      hostName: ['127.0.0.1', Validators.required],
      port: ['7545', Validators.required],
      chainId: ['5775', Validators.required],
      autoBake: [false, Validators.required],
      transactionFailure: [true, Validators.required]
    });

    this.store.select('chain')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((data: any) => {
        if (data) {
          // tslint:disable-next-line: no-string-literal
          this.chainServerFormData = data['server']['form'];
        }
      });
  }

  onSubmit() {
    if (this.chainServerForm.valid) {
      console.log(this.chainServerForm.value);
    }
  }
}
