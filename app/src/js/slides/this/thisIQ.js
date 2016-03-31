'use strict';

import React from 'react';
import Slide from '../slide';

export default class ThisIQSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'this';
        this.slideTitle = 'Interview Question';
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
                <div className="slide-header">Interview Question</div>
                <div className="slide-content">
                    <div className="code-block small">
                        <p>
                            <span>(function foo() &#123;</span>
                            <span>    function bar() &#123;</span>
                            <span>        this.a = this.a ? 4 : 3;</span>
                            <span>    &#125;</span>
                            <span> </span>
                            <span>    var obj1 = &#123;</span>
                            <span>        a: 1,</span>
                            <span>        bar: bar</span>
                            <span>    &#125;;</span>
                            <span> </span>
                            <span>    var obj2 = &#123;</span>
                            <span>        a: 0,</span>
                            <span>        bar: bar.bind(obj1)</span>
                            <span>    &#125;;</span>
                            <span> </span>
                            <span>    obj2.bar.call(obj2);</span>
                            <span>    console.log(obj1.a); // ?</span>
                            <span>    console.log(obj2.a); // ?</span>
                            <span>&#125;)();</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
