'use strict';

import React from 'react';
import Slide from '../slide';

export default class ClosureSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'Scope';
        this.slideTitle = 'Closure';
    }

    /**
     * Renders the slide's template.
     *
     * @return {Element}
     */
    render() {
        super.render();

        const sideContainerStyle = {
            float: 'left',
            width: '50%'
        };

        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Closure</div>
                <div className="slide-content">
                    <ul>
                        <li>The mapping of a function's <em>free variables</em> to their value at the time of the function's declaration</li>
                        <ul><li><strong>free variables:</strong> Identifiers used locally but declared in an enclosing scope</li></ul>
                        <li><strong>Be careful with callbacks!</strong></li>
                    </ul>
                    <div style={sideContainerStyle}>
                        <h2>Does Not Maintain Closure</h2>
                        <div className="code-block smallest">
                            <p>
                                <span>(function foo(elements) &#123;</span>
                                <span>    var num = 0;</span>
                                <span> </span>
                                <span>    function bar() &#123;</span>
                                <span>        console.log(num);</span>
                                <span>    &#125;</span>
                                <span> </span>
                                <span>    for (var i = 0, n = elements.length; i &#60; n; i++) &#123;</span>
                                <span>        num = Math.floor(Math.random() * 10);</span>
                                <span> </span>
                                <span>        elements[i]</span>
                                <span>            .addEventListener('click', bar);</span>
                                <span>    &#125;</span>
                                <span>&#125;)(document.getElementsByClassName('clickable'));</span>
                            </p>
                        </div>
                        <a href="https://jsfiddle.net/r2gx6ctv/30/" target="_blank">Live Example</a>
                    </div>
                    <div style={sideContainerStyle}>
                        <h2>Maintains <code>num</code>'s Value</h2>
                        <div className="code-block smallest">
                            <p>
                                <span>(function foo(elements) &#123;</span>
                                <span>    var num = 0;</span>
                                <span> </span>
                                <span>    function bar(n) &#123;</span>
                                <span>        console.log(n);</span>
                                <span>    &#125;</span>
                                <span> </span>
                                <span>    for (var i = 0, n = elements.length; i &#60; n; i++) &#123;</span>
                                <span>        num = Math.floor(Math.random() * 10);</span>
                                <span> </span>
                                <span>        elements[i]</span>
                                <span>            .addEventListener('click', bar.bind(this, num));</span>
                                <span>    &#125;</span>
                                <span>&#125;)(document.getElementsByClassName('clickable'));</span>
                            </p>
                        </div>
                        <a href="https://jsfiddle.net/r2gx6ctv/29/" target="_blank">Live Example</a>
                    </div>
                </div>
            </div>
        );
    }
}
