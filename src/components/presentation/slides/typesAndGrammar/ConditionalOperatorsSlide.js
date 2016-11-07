import char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class ConditionalOperatorsSlide extends React.Component {
    get id() {
        return 'conditional-operators';
    }
    get section() {
        return sections.TYPES_AND_GRAMMAR;
    }
    get title() {
        return 'Conditional Operators';
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Conditional Operators</div>
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
