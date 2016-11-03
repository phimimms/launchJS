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
                                <span>var a = [] && 0;    // 0</span>
                                <span>var b = null || &#123;&#125;; // &#123;&#125;</span>
                                <span> </span>
                                <span>if (b || a) &#123;</span>
                                <span>    // b || a --> &#123;&#125; --> Reaches here</span>
                                <span>&#125;</span>
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
