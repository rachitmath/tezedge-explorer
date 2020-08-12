export function form(reducer: Function) {
    return function (state: any, action: any) {
        let nextState: any = reducer(state, action);

        switch (action.type) {
            // update state with form data
            case 'FORM_VALUE_CHANGES': {
                let pathParts = (action.payload.path).split('.');

                if (pathParts.length > 2) {
                    throw new Error('[appNgrxForm][directive] Path with more than two parts (dots) not supported');
                }

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

