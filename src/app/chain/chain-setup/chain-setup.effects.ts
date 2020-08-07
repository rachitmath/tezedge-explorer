import { Injectable, NgZone } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom, catchError, tap, takeUntil } from 'rxjs/operators';
import { of, Subject, empty, timer } from 'rxjs';

const chainSetupDestroy$ = new Subject();

@Injectable()
export class ChainSetupEffects {

    constructor(
        private http: HttpClient,
        private actions$: Actions,
        private store: Store<any>,
    ) { }

    @Effect()
    ChainSetupLoad$ = this.actions$.pipe(
        ofType('CHAIN_SETUP_LOAD'),

        // merge state
        withLatestFrom(this.store, (action: any, state) => ({ action, state })),

        switchMap(() => {
            return this.http.get('../../../assets/006-carthage-protocol-parameters.json').pipe(
                map((response: any) => ({ type: 'CHAIN_SETUP_START_SUCCESS', payload: response })),
                catchError(error => of({ type: 'CHAIN_SETUP_START_ERROR', payload: error })),
            );
        }),
    );

    // stop chain setup action download
    @Effect({ dispatch: false })
    ChainSetupStopEffect$ = this.actions$.pipe(
        ofType('CHAIN_SETUP_STOP'),
        // merge state
        withLatestFrom(this.store, (action: any, state) => ({ action, state })),
        // init app modules
        tap(({ action, state }) => {
            chainSetupDestroy$.next();
        }),
    );
}
