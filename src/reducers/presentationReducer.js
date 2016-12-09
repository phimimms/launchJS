import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

/* The Presentation Reducer */
export default function slideReducer(state = initialState.presentation, action) {
    switch (action.type) {
        case actionTypes.SET_PRESENTATION_SLIDE:
            return Object.assign({}, state, { slide: action.slide });
        default:
            return state;
    }
}
