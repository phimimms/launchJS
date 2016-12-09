import * as char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import * as sections from '../../../../entities/sections';
import * as slides from '../../../../entities/slides';

class ConditionalOperatorsSlide extends React.Component {
    get section() {
        return sections.GRAMMAR;
    }
    get slide() {
        return slides.GRAMMAR_CONDITIONAL_OPERATORS;
    }

    /**
     * Instantiates the component.
     * @param {Object}  props   The initial values of instance properties
     */
    constructor(props) {
        super(props);
    }

    /**
     * Generates the HTML representation of the component.
     * @return {Element}
     */
    render() {
        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">{this.slide.title}</div>
                <div className="slide-content">
                    <ul>
                        <li>The value produced by <code>&&</code> or <code>||</code> will <strong>always</strong> be <em>one</em> of the two operand expressions</li>
                        <li>Both operators perform a boolean test on the first operand</li>
                        <ul><li>For <code>||</code>, if the test is <code>true</code>, the result is the value of the <em>first</em> operand.
                                Otherwise the result is the value of the <em>second</em> operand.</li>
                            <li>For <code>&&</code>, if the test is <code>true</code>, the result is the value of the <em>second</em> operand.
                                    Otherwise the result is the value of the <em>first</em> operand.</li>
                        </ul>
                        <li><code>if</code> coerces its expression to a boolean value</li>
                        <div className="code-block smaller">
                            <p>
                                <span>var a = [] && 0;    {char.COMMENT} 0</span>
                                <span>var b = null || {char.LBRACE}{char.RBRACE}; {char.COMMENT} {char.LBRACE}{char.RBRACE}</span>
                                <span> </span>
                                <span>if (b || a) {char.LBRACE}</span>
                                <span>    {char.COMMENT} b || a --> {char.LBRACE}{char.RBRACE} --> Reaches here</span>
                                <span>{char.RBRACE}</span>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

ConditionalOperatorsSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default ConditionalOperatorsSlide;
