const initialState = { count: 0, data: 1 };
const thunkReducer = (state = initialState, action) => {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                count: parseInt(state.count) + parseInt(state.data)
            };
        case "decrement":
            return { ...state, count: +state.count - state.data };
        case "getVal":
            return { ...state, data: action.payload };
        default:
            return state;
    }
};

export default thunkReducer;
