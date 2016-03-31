'use strict';

import React from 'react';
import Slide from '../slide';

export default class ScopeIQSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'Scope';
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
                    <div className="code-block">
                        <p>
                            <span>(function foo() &#123;</span>
                            <span>    function bar() &#123;</span>
                            <span>        i = 3;</span>
                            <span>    &#125;</span>
                            <span> </span>
                            <span>    for (var i = 0; i &#60; 5; i++) &#123;</span>
                            <span>        bar();</span>
                            <span>    &#125;</span>
                            <span>&#125;)();</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
