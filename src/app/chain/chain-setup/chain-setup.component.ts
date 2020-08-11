import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chain-setup',
  templateUrl: './chain-setup.component.html',
  styleUrls: ['./chain-setup.component.scss']
})
export class ChainSetupComponent implements OnInit, OnDestroy {

  public onDestroy$ = new Subject();

  public chainSetupForm: FormGroup;

  constructor(
    public store: Store<any>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.chainSetupForm = this.formBuilder.group({
      proofOfWorkNonce: ['8', Validators.required],
      nonceLength: ['32', Validators.required],
      revelationBlock: ['32', Validators.required],
      operationsBlock: ['16384', Validators.required],
      preservedCycle: ['5', Validators.required]
    });

    this.store.dispatch({
      type: 'CHAIN_SETUP_LOAD',
      payload: '',
    });

    this.store.select('chainSetupAction')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((data) => {
        if (data.stream) {
          // this.setFormValue(data.entities);
        }
      });
  }

  setFormValue(chainSetup) {
    this.chainSetupForm.patchValue({
      preservedCycle: chainSetup.preserved_cycles,
      proofOfWorkNonce: chainSetup.proof_of_work_threshold,
    });
  }

  onSubmit() {
    if (this.chainSetupForm.valid) {
      console.log(this.chainSetupForm.value);
    }
  }

  ngOnDestroy() {
    // stop streaming logs actions
    this.store.dispatch({
      type: 'CHAIN_SETUP_STOP',
    });
    // close all observables
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
