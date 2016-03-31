'use strict';

import React from 'react';
import Slide from '../slide';

export default class ThisIntroSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'this';
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
                <div className="slide-header">this</div>
                <div className="slide-content">
                    <ul>
                        <li>What is <code>this</code>?</li>
                        <ul><li>A runtime binding based on the conditions of the function's invocation</li></ul>
                        <li>So... What is <code>this</code>?</li>
                        <ul><li>An object whose value is dependent on how the currently executed function was called</li></ul>
                    </ul>
                </div>
            </div>
        );
    }
}
