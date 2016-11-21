import * as actionTypes from './actionTypes';
import { getSlides } from '../api/slideApi';

/**
 * Loads the slides in their presentation order
 * @return {Function}
 */
export function loadSlides() {
    return (dispatch) => {
        return getSlides().then((slides) => {
            dispatch({type: actionTypes.LOAD_SLIDES, slides});
        });
    };
}
