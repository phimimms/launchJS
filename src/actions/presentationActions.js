import * as actionTypes from './actionTypes';
import { getSlideByPageNumber } from '../api/slideApi';

/**
 * Sets the slide in the presentation.
 * @param   {Number}    pageNumber  The page number of the new presentation slide
 * @return  {Function}
 */
export function setPresentationSlide(pageNumber) {
    return (dispatch) => {
        return getSlideByPageNumber(pageNumber).then((slide) => {
            dispatch({ type: actionTypes.SET_PRESENTATION_SLIDE, slide });
        });
    };
}
