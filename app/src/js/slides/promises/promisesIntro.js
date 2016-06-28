'use strict';

import React from 'react';
import Slide from '../slide';

export default class PromisesIntroSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'Promises';
        this.slideTitle = 'Introduction';
    }

    /**
     * Renders the slide's template.
     *
     * @return {Element}
     */
    render() {
        super.render();
        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Promises</div>
                <div className="slide-content">
                </div>
            </div>
        );
    }
}
