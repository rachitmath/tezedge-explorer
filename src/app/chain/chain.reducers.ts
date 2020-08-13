import { ActionReducerMap, ActionReducer, State } from '@ngrx/store';

const initialState: any = {
    entities: {},
    stream: false,
};

export function reducer(state = initialState, action) {

    switch (action.type) {
        case 'CHAIN_START_SUCCESS': {
            return {
                ...state,
                entities: action.payload,
                stream: true,
            };
        }
        case 'CHAIN_STOP': {
            return {
                ...state,
                stream: false
            };
        }
        default:
            return state;
    }
};
