'use strict';

import React from 'react';
import Slide from '../slide';

export default class CoercionSlide extends Slide {
    /**
     * Instantiates the slide.
     *
     * @param {Object} props A map of instance properties to initial values
     */
    constructor(props) {
        super(props);

        this.sectionName = 'Types & Grammar';
        this.slideTitle = 'Coercion';
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
                <div className="slide-header">Coercion</div>
                <div className="slide-content">
                    <ul>
                        <li>Implicit conversion of one type to another</li>
                        <li><strong>Always</strong> results to a primitive type</li>
                        <li>String to Number:</li>
                            <div className="code-block smaller">
                                <p>
                                    <span>var a = '15';</span>
                                    <span>console.log(+a);     // 15</span>
                                    <span>console.log(+a + 1); // 16</span>
                                </p>
                            </div>
                        <li>Number to String:</li>
                            <div className="code-block smaller">
                                <p>
                                    <span>var a = 15;</span>
                                    <span>console.log(a + '');  // '15'</span>
                                    <span>console.log(a + '1'); // '151'</span>
                                </p>
                            </div>
                        <li>Anything to Boolean:</li>
                            <div className="code-block smaller">
                                <p>
                                    <span>var a = 15;</span>
                                    <span>console.log(!a);  // false</span>
                                    <span>console.log(!!a); // true</span>
                                </p>
                            </div>
                    </ul>
                </div>
            </div>
        );
    }
}
