'use strict';

import React from 'react';
import Slide from '../slide';

export default class IntroSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'Introduction';
        this.slideTitle = 'Title Page';
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
                <img src="./src/assets/img/intro-slide.png" alt="Novetta: Launch Javascript" />
            </div>
        );
    }
}
