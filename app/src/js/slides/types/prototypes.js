'use strict';

import React from 'react';
import Slide from '../slide';

export default class PrototypesSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'Types';
        this.slideTitle = 'Object Prototypes';
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
                <div className="slide-header">Object Prototypes</div>
                <div className="slide-content">
                    <ul>
                        <li>A prototype links an object to another object</li>
                        <li>All compound types have the <code>Object</code> prototype in their prototype chain</li>
                        <div className="code-block small">
                            <p>
                                <span>var obj = &#123; a: 1 &#125;;</span>
                                <span>//  obj: &#123; a: 1 &#125; ---> Object.prototype ---> null</span>
                                <span>var arr = [1];</span>
                                <span>//  arr: [1] ---> Array.prototype ---> Object.prototype --> null</span>
                            </p>
                        </div>
                        <li><code>Object.create()</code> creates a new object that's prototype-linked to the specified object</li>
                        <div className="code-block small">
                            <p>
                                <span>var obj1 = &#123; a: 1 &#125;;</span>
                                <span>var obj2 = Object.create(obj1);</span>
                                <span>console.log(obj2.a); // 1</span>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}
