'use strict';

import React from 'react';
import Slide from '../slide';

export default class FunctionExpressionsSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'Scope';
        this.slideTitle = 'Function Expressions';
    }

    /**
     * Renders the slide's template.
     *
     * @return {Element}
     */
    render() {
        super.render();

        const containerStyle = {
            height: '100%',
            overflow: 'hidden',
            width: '100%'
        };
        const sideContainerStyle = {
            float: 'left',
            width: '50%'
        };

        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Function Expressions</div>
                <div className="slide-content">
                    <ul>
                        <li><code>function</code> keyword is <strong>not</strong> the first term of the statement</li>
                        <li>Named Function Expression</li>
                            <div className="code-block smaller">
                                <p>
                                    <span>var foo = function bar() &#123;</span>
                                    <span>    ...</span>
                                    <span>&#125;;</span>
                                </p>
                            </div>
                        <li>Anonymous Function Expression</li>
                            <div className="code-block smaller">
                                <p>
                                    <span>someElement.addEventListener('click', function() &#123;</span>
                                    <span>    ...</span>
                                    <span>&#125;);</span>
                                </p>
                            </div>
                            <ul><li>Cannot support recursion</li></ul>
                        <li>Immediately Invoked Function Expression</li>
                            <div className="code-block smaller">
                                <p>
                                    <span>(function foo() &#123;</span>
                                    <span>    ...</span>
                                    <span>&#125;)();</span>
                                </p>
                            </div>
                            <ul><li>Does <strong>not</strong> occupy the local scope</li></ul>
                    </ul>
                </div>
            </div>
        );
    }
}
