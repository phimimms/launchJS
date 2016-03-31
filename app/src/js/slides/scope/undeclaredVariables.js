'use strict';

import React from 'react';
import Slide from '../slide';

export default class UndeclaredVariablesSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'Scope';
        this.slideTitle = 'Undeclared Variables';
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
                <div className="slide-header">Undeclared Variables</div>
                <div className="slide-content">
                    <div style={containerStyle}>
                        <div style={sideContainerStyle}>
                            <h1>Left-Hand Side</h1>
                            <div className="code-block small">
                                <p>
                                    <span>function foo() &#123;</span>
                                    <span>    a = 1;</span>
                                    <span>&#125;</span>
                                </p>
                            </div>
                            <ul>
                                <li>Stores the variable in the global scope</li>
                            </ul>
                        </div>
                        <div style={sideContainerStyle}>
                            <h1>Right-Hand Side</h1>
                            <div className="code-block small">
                                <p>
                                    <span>function bar() &#123;</span>
                                    <span>    var a = 2 * b;</span>
                                    <span>&#125;</span>
                                </p>
                            </div>
                            <ul>
                                <li>Reference Error!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
