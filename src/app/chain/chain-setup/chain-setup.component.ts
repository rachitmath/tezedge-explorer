import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-chain-setup',
  templateUrl: './chain-setup.component.html',
  styleUrls: ['./chain-setup.component.scss']
})
export class ChainSetupComponent implements OnInit {

  public onDestroy$ = new Subject();

  constructor(
    public store: Store<any>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch({
      type: 'CHAIN_SETUP_LOAD',
      payload: '',
    });

    this.store.select('chainSetupAction')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((data) => {
        console.log(data);
      });
  }

}
