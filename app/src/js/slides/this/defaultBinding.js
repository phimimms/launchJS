'use strict';

import React from 'react';
import Slide from '../slide';

export default class DefaultBindingSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'this';
        this.slideTitle = 'Default Binding';
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
                <div className="slide-header">Default Binding</div>
                <div className="slide-content">
                    <ul>
                        <li>Invoked with a plain, undecorated function reference</li>
                        <div className="code-block small">
                            <p>
                                <span>var foo = function bar() &#123;</span>
                                <span>    console.log(this); // global object (window)</span>
                                <span>&#125;;</span>
                                <span> </span>
                                <span>foo();</span>
                            </p>
                        </div>
                        <li>If the contents of the invoked function include <code>'use strict';</code>, then <code>this</code> will be <code>undefined</code></li>
                        <div className="code-block small">
                            <p>
                                <span>var foo = function bar() &#123;</span>
                                <span>    'use strict';</span>
                                <span>    console.log(this); // undefined</span>
                                <span>&#125;;</span>
                                <span> </span>
                                <span>foo();</span>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}
