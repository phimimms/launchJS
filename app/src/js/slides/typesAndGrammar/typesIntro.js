'use strict';

import React from 'react';
import Slide from '../slide';

export default class TypesIntroSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'Types & Grammar';
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
                <div className="slide-header">Types & Grammar</div>
                <div className="slide-content">
                    <ul>
                        <li>Javascript is <strong>not</strong> a typed language</li>
                        <div className="code-block small">
                            <p>
                                <span>var a = 'I am a string';</span>
                                <span>a = ['Now I am an array'];</span>
                            </p>
                        </div>
                        <li>Primitive Types:</li>
                            <ul>
                                <li><code>Boolean</code>, <code>Null</code>, <code>Undefined</code>, <code>Number</code>, <code>String</code></li>
                            </ul>
                        <li>Compound Types:</li>
                            <ul>
                                <li><code>Object</code>, <code>Array</code>, <code>Function</code>, <code>Date</code>, <code>RegExp</code></li>
                            </ul>
                    </ul>
                </div>
            </div>
        );
    }
}
