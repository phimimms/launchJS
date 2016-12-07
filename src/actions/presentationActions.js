import * as actionTypes from './actionTypes';

/**
 * Sets the slide in the presentation
 * @return {Function}
 */
export function setPresentationSlide(slide) {
    return (dispatch) => {
        return new Promise((fulfill) => {
            dispatch({ type: actionTypes.SET_PRESENTATION_SLIDE, slide });
            fulfill();
        });
    };
}
