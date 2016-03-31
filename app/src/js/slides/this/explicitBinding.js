'use strict';

import React from 'react';
import Slide from '../slide';

export default class ExplicitBindingSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'this';
        this.slideTitle = 'Explicit Binding';
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
                <div className="slide-header">Explicit Binding</div>
                <div className="slide-content">
                    <ul>
                        <li>Invoked with a specified object as the context via <code>call()</code> or <code>apply()</code></li>
                        <div className="code-block smaller">
                            <p>
                                <span>var obj1 = &#123; &#125;;</span>
                                <span>var foo = function() &#123;</span>
                                <span>    console.log(this); // obj1</span>
                                <span>&#125;;</span>
                                <span> </span>
                                <span>foo.call(obj1);</span>
                            </p>
                        </div>
                        <li>Hard Biding: <code>bind()</code> returns a new function that calls the original function with the specified object as the <code>this</code> context</li>
                        <div className="code-block smaller">
                            <p>
                                <span>var obj1 = &#123; &#125;;</span>
                                <span> </span>
                                <span>var foo = function() &#123;</span>
                                <span>    console.log(this); // obj1</span>
                                <span>&#125;.bind(obj1);</span>
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
