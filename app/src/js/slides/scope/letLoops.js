'use strict';

import React from 'react';
import Slide from '../slide';

export default class LetLoopsSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'Scope';
        this.slideTitle = 'Let Loops';
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
                <div className="slide-header">Let Loops</div>
                <div className="slide-content">
                <ul>
                    <li>The identifier is scoped to the loop's braces</li>
                    <div className="code-block small">
                        <p>
                            <span>for (let i = 0; i &#60; 5; i++) &#123;</span>
                            <span>    ...</span>
                            <span>&#125;</span>
                            <span>console.log(i); // Reference Error!</span>
                        </p>
                    </div>
                    <li>Creates closure per iteration</li>
                    <div className="code-block small">
                        <p>
                            <span>(function foo(elements) &#123;</span>
                            <span>    for (let i = 0, n = elements.length; i &#60; n; i++) &#123;</span>
                            <span>        var num = Math.floor(Math.random() * 10);</span>
                            <span> </span>
                            <span>        elements[i]</span>
                            <span>            .addEventListener('click', function() &#123;</span>
                            <span>                console.log(num);</span>
                            <span>        &#125;);</span>
                            <span>    &#125;</span>
                            <span>&#125;)(document.getElementsByClassName('clickable'));</span>
                        </p>
                    </div>
                </ul>
                </div>
            </div>
        );
    }
}
