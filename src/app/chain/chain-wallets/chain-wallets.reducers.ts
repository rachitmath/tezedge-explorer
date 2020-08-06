import * as moment from 'moment-mini-ts';

const initialState: any = {
    entities: {},
    stream: false,
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CHAIN_WALLET_START_SUCCESS': {
            return {
                ...state,
                entities: action.payload,
                stream: true,
            };
        }
    }
}
