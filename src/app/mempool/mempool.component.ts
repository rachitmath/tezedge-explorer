import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-mempool',
  templateUrl: './mempool.component.html',
  styleUrls: ['./mempool.component.scss']
})
export class MempoolComponent implements OnInit, OnDestroy {

  public onDestroy$ = new Subject();
  public mempoolAction = [];
  public mempoolList = [];
  public currentTransaction;

  constructor(
    public store: Store<any>,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.store.select('mempoolAction')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((data: any) => {
        if (data.stream) {
          this.mempoolAction = data.transactions;
          // console.log(this.mempoolAction);
          this.mempoolAction.forEach(action => {
            if (action.transaction.contents) {
              action.transaction.contents?.map(transaction => {
                // console.log(transaction);
                this.mempoolList.push({
                  type: action.type,
                  kind: transaction?.kind,
                  transaction: action.transaction
                });
              });
            } else {
              this.mempoolList.push({
                type: action.type,
                kind: '',
                transaction: action.transaction
              });
            }
          });
          // console.log(this.mempoolList);
        }
      });
  }

  onChangeTransaction(event) {
    this.currentTransaction = event
  }

  ngOnDestroy() {
    this.mempoolList = [];
    // stop streaming actions
    this.store.dispatch({
      type: 'MEMPOOL_STOP'
    });

    // close all observables
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
