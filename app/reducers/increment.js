import {
    INCREMENT,
    DECREMENT
} from '../actions/increment';


const initialState = {
    value: 0
};

const counter = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                value: state.value++,
                ...state
            };
        case DECREMENT:
            return {
                value: state.value--,
                ...state
            };
        default:
            return state;
    }
};

export default counter;
