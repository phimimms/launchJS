import * as slides from '../entities/slides';

/* The Initial State of the Redux Store */
export default {
    /**
     * The presentation state.
     * @type {Object}
     */
    presentation: {
        /**
         * The slide in view of the presentation.
         * @type {module:slide~slide}
         */
        slide: slides.SCOPE_INTRO
    },
    /**
     * The slide state.
     * @type {Object}
     */
    slide: {
        /**
         * The slide components in presentation order.
         * @type {Array.<React.Component>}
         */
        components: [],
        /**
         * The sections in presentation order.
         * @type {Array.<module:section~section>}
         */
        sections: []
    }
};
