'use strict';

import React from 'react';
import Slide from '../slide';

export default class ES6ScopeSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'Scope';
        this.slideTitle = 'ES6';
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
                <div className="slide-header">ES6 Scope</div>
                <div className="slide-content">
                    <ul>
                        <li><strong>Block</strong> scoped variable declaration keywords: <code>let</code> & <code>const</code></li>
                        <div className="code-block small">
                            <p>
                                <span></span>
                                <span>(function() &#123;</span>
                                <span>    let a = 1; // No different than 'var'</span>
                                <span>    &#123;</span>
                                <span>        let b = 2;</span>
                                <span>    &#125;</span>
                                <span>    console.log(b); // Reference Error!</span>
                                <span>    const c = 3;</span>
                                <span>    c++; // Type Error!</span>
                                <span>&#125;)();</span>
                            </p>
                        </div>
                        <li><code>let</code> Loops</li>
                        <div className="code-block small">
                            <p>
                                <span>for (let i = 0; i &#60; 5; i++) &#123;</span>
                                <span>    ...</span>
                                <span>&#125;</span>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}
