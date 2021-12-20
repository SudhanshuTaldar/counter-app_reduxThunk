export const increment = () => {
    return {
        type: "increment"
    };
};
export const decrement = () => {
    return {
        type: "decrement"
    };
};
export const getValAsync = (data) => {
    return {
        type: "getVal",
        payload: data
    };
};
export const getVal = (data) => {
    return (dispatch) => {
        if (data < 0 || isNaN(data) === true) {
            return dispatch(getValAsync(1));
        } else {
            return dispatch(getValAsync(data));
        }
    };
};

