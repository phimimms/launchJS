import * as types from '../actions/actionTypes';

export default function slideReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_SLIDES:
            return action.slides;
        default:
            return state;
    }
}
