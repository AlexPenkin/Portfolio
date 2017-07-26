import {
    INCREMENT,
    DECREMENT
} from '../actions/increment';


const initialState = {
    counter: 0
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                counter: state.counter++,
                ...state
            }
            break;
        case DECREMENT:
            return {
                counter: state.counter--,
                ...state
            }
            break;

        default:
            return state;
            break;
    }
}

export default counter;