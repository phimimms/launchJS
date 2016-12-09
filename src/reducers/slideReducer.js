import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

/* The Slide Reducer */
export default function slideReducer(state = initialState.slide, action) {
    switch (action.type) {
        case actionTypes.LOAD_SECTIONS:
            return Object.assign({}, state, { sections: action.sections});
        case actionTypes.LOAD_SLIDE_COMPONENTS:
            return Object.assign({}, state, { components: action.slideComponents});
        default:
            return state;
    }
}
