import {createStore} from "redux";

export const INCREMENT = "INCREMENT";
export const RESET = "RESET";

const initialState = {
    count_start: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                count_start: state.count_start + action.amount
            }
        }
        case RESET: {
            return initialState
        }
    }
    return state
};


export const increment = amount => ({type: INCREMENT, amount});
export const reset = () => ({type: RESET});


const store = createStore(reducer);
export default store;