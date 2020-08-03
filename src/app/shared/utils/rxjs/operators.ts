import { OperatorFunction } from 'rxjs';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

interface ActionWithPayload extends Action {
    payload?: object;
}

// return true only if url match route
export function ofRoute(path: string | string[]): OperatorFunction<Action, Action> {
    console.log('action');
    return filter((action: any) => {
        // console.log(action);

        // process only ROUTER_NAVIGATION actions
        if (action.type === '@ngrx/router-store/navigation') {

            const parts = (path as string).split('/');
            const segments = (action.payload.event.url as string).split('/');

            if (parts.length !== segments.length) {
                // The actual URL is shorter/longer than the segment, no match
                return false;
            }

            // Check each config part against the actual URL
            for (let index = 0; index < parts.length; index++) {
                const part = parts[index];
                const segment = segments[index];
                const isParameter = part.startsWith(':');
                // console.log('[ofRoute] part: ', part, segment, part !== segment, isParameter)
                if (!isParameter && (part !== segment)) {
                    // The actual URL part does not match the config, no match
                    return false;
                }
            }

            // The actual URL match path
            return true;

        }

        return false;

    });
}

export function enterZone(zone) {
    return function enterZoneImplementation(source) {
        // tslint:disable-next-line: deprecation
        return Observable.create(observer => {
            const onNext = (value) => zone.run(() => observer.next(value));
            const onError = (e) => zone.run(() => observer.error(e));
            const onComplete = () => zone.run(() => observer.complete());
            return source.subscribe(onNext, onError, onComplete);
        });
    };
}
