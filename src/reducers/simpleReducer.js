const initialState = {
    result: null,
}

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SIMPLE_ACTION':
            return {
                ...state,
                result: payload,
            };
        default:
            return state;
    }
}
