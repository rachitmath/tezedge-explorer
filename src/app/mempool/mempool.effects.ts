import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of, Subject, interval, timer } from 'rxjs';
import { map, withLatestFrom, flatMap, catchError, switchMap, tap, takeUntil } from 'rxjs/operators';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { HttpClient } from '@angular/common/http';
import { ofRoute } from '../shared/utils/rxjs/operators';

const mempoolDestroy$ = new Subject();

@Injectable()
export class MempoolEffects {

    constructor(
        private http: HttpClient,
        private actions$: Actions,
        private store: Store<any>,
    ) { }

    // trigger layout  change
    @Effect()
    MempoolTransaction = this.actions$.pipe(
        ofRoute('/mempool'),
        switchMap(() => {

            // return timer(0, 10000).pipe(
            //     takeUntil(mempoolDestroy$),
            //     switchMap(() =>
            //         this.http.get('https://mainnet.simplestaking.com:3000/chains/main/mempool/pending_operations').pipe(
            //             map((response: any) => ({ type: 'MEMPOOL_START_SUCCESS', payload: response })),
            //         )
            //     )
            // );

            // console.log('mempool');
            return this.http.get('https://mainnet.simplestaking.com:3000/chains/main/mempool/pending_operations').pipe(
                map((response: any) => ({ type: 'MEMPOOL_START_SUCCESS', payload: response })),
            );
        }),
    );
}
