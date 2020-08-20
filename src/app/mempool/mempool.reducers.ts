import { ActionReducerMap, ActionReducer, State } from '@ngrx/store';

const initialState: any = {
    transactions: {},
    stream: false,
};

export function reducer(state = initialState, action: any) {

    switch (action.type) {
        case 'MEMPOOL_START_SUCCESS': {
            return {
                ...state,
                transactions: mapTransaction(action.payload),
                stream: true,
            };
        }
        case 'MEMPOOL_STOP': {
            return {
                ...state,
                stream: false
            };
        }
        default:
            return state;
    }
};

function mapTransaction(rawTransaction: any) {

    const result = [];
    Object.keys(rawTransaction).map((value) => {
        rawTransaction[value].map((data: any) => {
            if (data.length > 1) {
                data.map(transaction => {
                    result.push({
                        type: value,
                        transaction,
                    });
                });
            } else {
                result.push({
                    type: value,
                    transaction: data,
                });
            }
        });
    });

    return result;
}
