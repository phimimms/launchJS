import * as actionTypes from './actionTypes';
import { getSlidesBySection, getSlideComponents } from '../api/slideApi';

/**
 * Loads the slides in the presentation.
 * @return {Function}
 */
export function loadSlides() {
    return (dispatch) => {
        let promises = [];

        promises.push(getSlidesBySection().then((sections) => {
            dispatch({ type: actionTypes.LOAD_SECTIONS, sections });
        }));
        promises.push(getSlideComponents().then((slideComponents) => {
            dispatch({ type: actionTypes.LOAD_SLIDE_COMPONENTS, slideComponents });
        }));

        return Promise.all(promises);
    };
}
