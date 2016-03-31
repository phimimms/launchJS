'use strict';

import React from 'react';
import Slide from '../slide';

export default class ES6ThisSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'this';
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
                <div className="slide-header">ES6 this</div>
                <div className="slide-content">
                    <ul>
                        <li>Arrow-functions adopt the <code>this</code> binding from the enclosing scope</li>
                        <ul><li>Cannot be overridden (even with <code>new</code> binding)</li></ul>
                        <div className="code-block small">
                            <p>
                                <span>var obj1 = &#123; &#125;;</span>
                                <span>var obj2 = &#123; &#125;;</span>
                                <span> </span>
                                <span>(function() &#123;</span>
                                <span>    console.log(this); // obj1;</span>
                                <span> </span>
                                <span>    var foo = () => &#123;</span>
                                <span>        console.log(this); // obj1;</span>
                                <span>    &#125;.bind(obj2);</span>
                                <span> </span>
                                <span>    foo.call(obj2);</span>
                                <span>&#125;.bind(obj1))();</span>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}
