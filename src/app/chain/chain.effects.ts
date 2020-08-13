import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of, Subject } from 'rxjs';
import { map, withLatestFrom, flatMap, catchError, switchMap, tap } from 'rxjs/operators';
import { ofRoute } from '../shared/utils/rxjs/operators';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { HttpClient } from '@angular/common/http';

const chainDestroy$ = new Subject();

@Injectable()
export class ChainEffects {

    // trigger layout  change
    @Effect()
    TezosShowSidenavEffects = this.actions$.pipe(
        ofRoute('/chain'),
        map(() => ({ type: 'APP_SIDENAV_HIDE' })),
        catchError((error, caught) => {
            console.error(error);
            return caught;
        }),
    );

    @Effect()
    chainLoad$ = this.actions$.pipe(
        ofType('CHAIN_LOAD'),

        // merge state
        withLatestFrom(this.store, (action: any, state) => ({ action, state })),

        switchMap(() => {
            return this.http.get('../../assets/006-carthage-protocol-parameters.json').pipe(
                map((response: any) => ({ type: 'CHAIN_START_SUCCESS', payload: response })),
                catchError(error => of({ type: 'CHAIN_START_ERROR', payload: error })),
            );
        }),
    );

    // stop chain wallet action download
    @Effect({ dispatch: false })
    chainStopEffect$ = this.actions$.pipe(
        ofType('CHAIN_STOP'),
        // merge state
        withLatestFrom(this.store, (action: any, state) => ({ action, state })),
        // init app modules
        tap(({ action, state }) => {
            chainDestroy$.next();
        }),
    );

    constructor(
        private http: HttpClient,
        private actions$: Actions,
        private store: Store<any>,
    ) { }

}
