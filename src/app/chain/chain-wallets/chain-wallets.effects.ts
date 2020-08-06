import { Injectable, NgZone } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom, catchError, tap, takeUntil } from 'rxjs/operators';
import { of, Subject, empty, timer } from 'rxjs';

const chainWalletDestroy$ = new Subject();

@Injectable()
export class ChainWalletEffects {

    constructor(
        private http: HttpClient,
        private actions$: Actions,
        private store: Store<any>,
    ) { }

    @Effect()
    ChainWalletLoad$ = this.actions$.pipe(
        ofType('CHAIN_WALLET_LOAD'),

        // merge state
        withLatestFrom(this.store, (action: any, state) => ({ action, state })),

        switchMap(() => {
            return this.http.get('../../../assets/006-carthage-protocol-parameters.json').pipe(
                map(response => ({ type: 'CHAIN_WALLET_START_SUCCESS', payload: response })),
                catchError(error => of({ type: 'CHAIN_WALLET_START_ERROR', payload: error })),
            );
        }),
    );
}
