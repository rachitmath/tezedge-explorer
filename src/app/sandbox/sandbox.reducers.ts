import * as moment from 'moment-mini-ts';

const initialState: any = {
    entities: {},
    stream: false,
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SANDBOX_START_SUCCESS': {
            return {
                ...state,
                entities: action.payload,
                stream: true,
            };
        }
        case 'SANDBOX_STOP': {
            return {
                ...state,
                stream: false
            };
        }
        default:
            return state;
    }
}
