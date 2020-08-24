import { ActionReducerMap, ActionReducer, State } from '@ngrx/store';

const initialState: any = {
    id: [],
    transactions: {},
    stream: false,
};

export function reducer(state = initialState, action: any) {

    switch (action.type) {
        case 'MEMPOOL_START_SUCCESS': {
            return {
                ...state,
                id: Object.keys(action.payload),
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
        if (rawTransaction[value].length > 0) {
            rawTransaction[value].map((data: any) => {
                if (data && data.length > 0) {
                    data.map(transaction => {
                        if (transaction.contents) {
                            transaction.contents?.map(content => {
                                result.push({
                                    type: value,
                                    kind: content?.kind,
                                    transaction
                                });
                            });
                        }
                    });
                } else {
                    if (data.contents.length > 0) {
                        data.contents?.map(content => {
                            result.push({
                                type: value,
                                kind: content?.kind,
                                transaction: data
                            });
                        });
                    } else {
                        result.push({
                            type: value,
                            kind: '',
                            transaction: data
                        });
                    }
                }
            });
        }
    });
    console.log(result);
    return result;
}
