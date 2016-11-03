import * as types from './actionTypes';
import { getSlides } from '../api/slideApi';

export function loadSlides() {
    return (dispatch) => {
        return getSlides().then((slides) => {
            dispatch({type: types.LOAD_SLIDES, slides});
        });
    };
}
