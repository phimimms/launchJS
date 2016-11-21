import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

/* The Slide Reducer */
export default function slideReducer(state = initialState.slides, action) {
    switch (action.type) {
        case actionTypes.LOAD_SLIDES:
            return action.slides;
        default:
            return state;
    }
}
