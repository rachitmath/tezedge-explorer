import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, withLatestFrom, flatMap, catchError } from 'rxjs/operators';
import { ofRoute } from '../shared/utils/rxjs/operators';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

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

    constructor(
        private actions$: Actions,
        private store: Store<any>,
    ) { }

}
