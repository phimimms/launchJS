'use strict';

import React from 'react';
import Slide from '../slide';

export default class FunctionDeclarationsSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'Scope';
        this.slideTitle = 'Function Declarations';
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
                <div className="slide-header">Function Declarations</div>
                <div className="slide-content">
                    <ul>
                        <li>A named function indentifier without a variable assignment</li>
                            <ul><li><code>function</code> keyword is the first term of the statement</li></ul>
                            <div className="code-block smaller">
                                <p>
                                    <span>function foo() &#123;</span>
                                    <span>    ...</span>
                                    <span>&#125;</span>
                                </p>
                            </div>
                        <li>Function declarations are <strong>always</strong> hoisted</li>
                        <div className="code-block small">
                            <p>
                                <span>function foo() &#123;</span>
                                <span>    function bar() &#123;</span>
                                <span>        return 1;</span>
                                <span>    &#125;</span>
                                <span>    return bar();</span>
                                <span> </span>
                                <span>    function bar() &#123;</span>
                                <span>        return 2;</span>
                                <span>    &#125;</span>
                                <span>&#125;</span>
                                <span>console.log(foo()); // 2</span>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}
