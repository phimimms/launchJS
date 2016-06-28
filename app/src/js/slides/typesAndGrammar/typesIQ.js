'use strict';

import React from 'react';
import Slide from '../slide';

export default class TypesIQSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'Types & Grammar';
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
                    <div className="code-block smaller">
                        <p>
                            <span>var obj1 = &#123;</span>
                            <span>    get a() &#123;</span>
                            <span>        return this.b;</span>
                            <span>    &#125;,</span>
                            <span>    set a(num) &#123;</span>
                            <span>        this.b = num;</span>
                            <span>    &#125;</span>
                            <span>&#125;;</span>
                            <span> </span>
                            <span>var obj2 = Object.create(obj1);</span>
                            <span>obj2.a = 1;</span>
                            <span> </span>
                            <span>console.log(obj1.a); // ?</span>
                            <span>console.log(obj2.a); // ?</span>
                            <span> </span>
                            <span>var obj3 = Object.create(obj2);</span>
                            <span> </span>
                            <span>obj2.a = 2;</span>
                            <span> </span>
                            <span>console.log(obj2.a); // ?</span>
                            <span>console.log(obj3.a); // ?</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
