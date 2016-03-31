'use strict';

import React from 'react';
import Slide from '../slide';

export default class ImplicitBindingSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'this';
        this.slideTitle = 'Implicit Binding';
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
                <div className="slide-header">Implicit Binding</div>
                <div className="slide-content">
                    <ul>
                        <li>Invoked with an object for a function reference</li>
                        <div className="code-block">
                            <p>
                                <span>var foo = &#123;</span>
                                <span>    bar: function() &#123;</span>
                                <span>        console.log(this); // foo</span>
                                <span>    &#125;</span>
                                <span>&#125;;</span>
                                <span> </span>
                                <span>foo.bar();</span>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}
