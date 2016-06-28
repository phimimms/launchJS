'use strict';

import React from 'react';
import Slide from '../slide';

export default class ScopeIntroSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'Scope';
        this.slideTitle = 'Introduction';
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

        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Scope</div>
                <div className="slide-content">
                    <ul>
                        <li>The set of rules that determines where a variable is accessible</li>
                        <li><strong>Functions create new scopes</strong></li>
                        <li><code>var</code> declares an identifier to the local scope</li>
                    </ul>
                    <div style={containerStyle}>
                        <div style={{float: 'left', width: '40%'}}>
                            <div className="code-block small">
                                <p>
                                    <span>var a = 2;</span>
                                    <span>function foo() &#123;</span>
                                    <span>    var a = 0;</span>
                                    <span>    var bar = function() &#123;</span>
                                    <span>        a += 1;</span>
                                    <span>    &#125;;</span>
                                    <span> </span>
                                    <span>    bar();</span>
                                    <span>    console.log(a); // 1</span>
                                    <span>&#125;</span>
                                    <span>foo();</span>
                                    <span>console.log(a); // 2</span>
                                </p>
                            </div>
                        </div>
                        <div style={{float: 'left', width: '60%'}}>
                            <div className="circle-large yellow__transparent">bar</div>
                            <div className="circle-medium orange__transparent">foo</div>
                            <div className="circle-small red__transparent">global</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
