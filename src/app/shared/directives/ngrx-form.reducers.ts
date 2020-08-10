export function form(reducer: Function) {
    return function (state: any, action: any) {
        const nextState = reducer(state, action);

        switch (action.type) {
            // update state with form data
            case 'FORM_VALUE_CHANGES': {
                const pathParts = (action.payload.path).split('.');
                if (pathParts.length === 2) {
                    return Object.assign({}, nextState, {
                        [pathParts[0]]: {
                            ...nextState[pathParts[0]],
                            [pathParts[1]]: {
                                ...nextState[pathParts[1]],
                                form: {
                                    ...action.payload.value
                                },
                            },
                        }
                    });
                }

            }
            // tslint:disable-next-line: no-switch-case-fall-through
            default:
                return nextState;
        }
    };
}

