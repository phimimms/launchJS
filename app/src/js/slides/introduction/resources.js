'use strict';

import React from 'react';
import Slide from '../slide';

export default class Resources extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'Introduction';
        this.slideTitle = 'Web App Resources';
    }

    /**
     * Renders the slide's template.
     *
     * @return {Element}
     */
    render() {
        super.render();
        return (
            <div className="slide-container slide-image">
                <img src="./src/assets/img/js-resources.png" alt="Web App Resources" />
            </div>
        );
    }
}
