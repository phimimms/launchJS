import * as char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import * as sections from '../../../../dictionary/sections';
import * as slides from '../../../../dictionary/slides';

class PassingParametersSlide extends React.Component {
    get section() {
        return sections.GRAMMAR;
    }
    get slide() {
        return slides.GRAMMAR_PASSING_PARAMETERS;
    }

    /**
     * Instantiates the Component
     * @param {Object}  props   The initial values of instance properties
     */
    constructor(props) {
        super(props);
    }

    /**
     * Generates the HTML representation of the Component
     * @return {Element}
     */
    render() {
        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">{this.slide.title}</div>
                <div className="slide-content">
                    <ul>
                        <li>Primitive types are <strong>always</strong> passed by <em>value</em></li>
                        <div className="code-block smaller">
                            <p>
                                <span>var foo = function(p) {char.LBRACE}</span>
                                <span>    p += 1;</span>
                                <span>{char.RBRACE};</span>
                                <span> </span>
                                <span>var a = 0;</span>
                                <span>foo(a);</span>
                                <span>console.log(a); {char.COMMENT} 0</span>
                            </p>
                        </div>
                        <li>Compound types are <strong>always</strong> passed by <em>reference</em></li>
                        <div className="code-block smaller">
                            <p>
                                <span>var foo = function(p) {char.LBRACE}</span>
                                <span>    p.push(1);</span>
                                <span>{char.RBRACE};</span>
                                <span> </span>
                                <span>var a = [0];</span>
                                <span>foo(a);</span>
                                <span>console.log(a); {char.COMMENT} [0, 1]</span>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

PassingParametersSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default PassingParametersSlide;
