'use strict';

import React from 'react';
import Slide from '../slide';

export default class newBindingSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'this';
        this.slideTitle = 'new Binding';
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
                <div className="slide-header">new Binding</div>
                <div className="slide-content">
                    <ul>
                        <li>Invoked as a construction call of the function</li>
                        <ul>
                            <li>The new object being constructed is set as the <code>this</code> context</li>
                            <li>The constructed object is automatically returned unless the function specifies a return statement</li>
                        </ul>
                        <div className="code-block small">
                            <p>
                                <span>var Foo = function() &#123;</span>
                                <span>    this.a = 1;</span>
                                <span>&#125;;</span>
                                <span> </span>
                                <span>var obj = new Foo();</span>
                                <span>console.log(obj); // &#123; a: 1 &#125;</span>
                            </p>
                        </div>
                        <li><strong>Binding Priority:</strong> <code>new</code> &#62; hard &#62; explicit &#62; implicit &#62; default</li>
                    </ul>
                </div>
            </div>
        );
    }
}
