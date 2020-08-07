import * as moment from 'moment-mini-ts';

const initialState: any = {
    entities: {},
    stream: false,
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CHAIN_SETUP_START_SUCCESS': {
            return {
                ...state,
                entities: action.payload,
                stream: true,
            };
        }
        case 'CHAIN_SETUP_STOP': {
            return {
                ...state,
                stream: false
            };
        }
        default:
            return state;
    }
}
