'use strict';

import React from 'react';
import Slide from '../slide';

export default class GettersSettersSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'Types';
        this.slideTitle = 'Getters & Setters';
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
                <div className="slide-header">Getters & Setters</div>
                <div className="slide-content">
                    <div className="code-block small">
                        <p>
                            <span>var obj = &#123;</span>
                            <span>    get a() &#123;</span>
                            <span>        return this.b;</span>
                            <span>    &#125;,</span>
                            <span>    set a(num) &#123;</span>
                            <span>        this.b = num;</span>
                            <span>    &#125;</span>
                            <span>&#125;;</span>
                            <span> </span>
                            <span>obj.a = 1;</span>
                            <span>console.log(obj.a); // 1</span>
                        </p>
                    </div>
                    <ul>
                        <li>Getters define functionality for RHS evaluations</li>
                        <li>Setters define functionality for LHS evaluations</li>
                    </ul>
                </div>
            </div>
        );
    }
}
