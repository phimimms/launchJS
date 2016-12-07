import * as slides from '../dictionary/slides';

/* The Initial State of the Redux Store */
export default {
    presentation: {
        /**
         * The slide in view of the presentation
         * @type {Object}
         */
        slide: slides.SCOPE_INTRO
    },
    slides: []
};
