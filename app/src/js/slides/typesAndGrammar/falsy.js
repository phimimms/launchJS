'use strict';

import React from 'react';
import Slide from '../slide';

export default class FalsySlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'Types & Grammar';
        this.slideTitle = 'Truthy vs. Falsy';
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
                <div className="slide-header">Truthy vs. Falsy</div>
                <div className="slide-content">
                    <ul>
                        <li>Falsy values:</li>
                        <ul>
                            <li><code>undefined</code></li>
                            <li><code>null</code></li>
                            <li><code>false</code></li>
                            <li><code>+0</code></li>
                            <li><code>-0</code></li>
                            <li><code>NaN</code></li>
                        </ul>
                        <li>Anything <strong>not</strong> explicitly on the falsy list is <em>truthy</em></li>
                    </ul>
                </div>
            </div>
        );
    }
}
