import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chain',
  templateUrl: './chain.component.html',
  styleUrls: ['./chain.component.scss']
})
export class ChainComponent implements OnInit, OnDestroy {

  public destroy$ = new Subject<null>();

  constructor(
    public store: Store<any>,
  ) { }

  ngOnInit(): void {


    this.store.dispatch({
      type: 'CHAIN_LOAD',
      payload: '',
    });
  }

  ngOnDestroy() {
    // close all observables
    this.destroy$.next();
    this.destroy$.complete();
  }
}
