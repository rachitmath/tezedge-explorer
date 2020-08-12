import { Injectable, NgZone } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom, catchError, tap, takeUntil } from 'rxjs/operators';
import { of, Subject, empty, timer } from 'rxjs';

const sandboxDestroy$ = new Subject();

@Injectable()
export class SandboxEffects {

    constructor(
        private http: HttpClient,
        private actions$: Actions,
        private store: Store<any>,
    ) { }

    @Effect()
    sandboxLoad$ = this.actions$.pipe(
        ofType('SANDBOX_LOAD'),

        // merge state
        withLatestFrom(this.store, (action: any, state) => ({ action, state })),

        switchMap(() => {
            return this.http.get('../../assets/006-carthage-protocol-parameters.json').pipe(
                map((response: any) => ({ type: 'SANDBOX_START_SUCCESS', payload: response })),
                catchError(error => of({ type: 'SANDBOX_START_ERROR', payload: error })),
            );
        }),
    );

    // stop chain wallet action download
    @Effect({ dispatch: false })
    sandboxStopEffect$ = this.actions$.pipe(
        ofType('SANDBOX_STOP'),
        // merge state
        withLatestFrom(this.store, (action: any, state) => ({ action, state })),
        // init app modules
        tap(({ action, state }) => {
            sandboxDestroy$.next();
        }),
    );
}
