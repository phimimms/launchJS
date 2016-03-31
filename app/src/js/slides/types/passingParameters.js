'use strict';

import React from 'react';
import Slide from '../slide';

export default class PassingParametersSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'Types';
        this.slideTitle = 'Passing Parameters';
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
                <div className="slide-header">Passing Parameters</div>
                <div className="slide-content">
                    <ul>
                        <li>Primitive types are <strong>always</strong> passed by <em>value</em></li>
                        <div className="code-block small">
                            <p>
                                <span>var foo = function(p) &#123;</span>
                                <span>    p += 1;</span>
                                <span>&#125;;</span>
                                <span> </span>
                                <span>var a = 0;</span>
                                <span>foo(a);</span>
                                <span>console.log(a); // 0</span>
                            </p>
                        </div>
                        <li>Compound types are <strong>always</strong> passed by <em>reference</em></li>
                        <div className="code-block small">
                            <p>
                                <span>var foo = function(p) &#123;</span>
                                <span>    p.push(1);</span>
                                <span>&#125;;</span>
                                <span> </span>
                                <span>var a = [0];</span>
                                <span>foo(a);</span>
                                <span>console.log(a); // [0, 1]</span>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}
