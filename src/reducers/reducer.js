const initialState = {
    hasFever: false,
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_FEVER':
            return {
                ...state,
                hasFever: payload,
            };
        case 'SET_WHEEZE':
            return {
                ...state,
                hasWheeze: payload,
            };
        default:
            return state;
    }
};
