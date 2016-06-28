'use strict';

import React from 'react';
import Slide from '../slide';

export default class EqualityOperatorsSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'Types & Grammar';
        this.slideTitle = 'Equality Operators';
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
                <div className="slide-header">Equality Operators</div>
                <div className="slide-content">
                    <ul>
                        <li><code>==</code> allows coercion in the comparison and <code>===</code> disallows coercion</li>
                        <ul><li><strong>Never</strong> use <code>==</code> against a boolean value</li></ul>
                        <div className="code-block smaller">
                            <p>
                                <span>var a = '42';</span>
                                <span>if (a == true) &#123; // Does not reach here &#125;</span>
                                <span>if (a) &#123; // Does reach here &#125;</span>
                            </p>
                        </div>
                        <li>Objects (including arrays and functions) are only equal if they are both references to the <em>exact same value</em></li>
                        <ul><li><code>==</code> and <code>===</code> behave identically when two objects are being compared</li></ul>
                    </ul>
                </div>
            </div>
        );
    }
}
