import char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class FunctionExpressionsSlide extends React.Component {
    get id() {
        return 'function-expressions';
    }
    get section() {
        return sections.SCOPE;
    }
    get title() {
        return 'Function Expressions';
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Function Expressions</div>
                <div className="slide-content">
                    <ul>
                        <li><code>function</code> keyword is <strong>not</strong> the first term of the statement</li>
                        <li>Named Function Expression</li>
                            <div className="code-block smaller">
                                <p>
                                    <span>var foo = function bar() {char.LBRACE}</span>
                                    <span>    ...</span>
                                    <span>{char.RBRACE};</span>
                                </p>
                            </div>
                        <li>Anonymous Function Expression</li>
                            <div className="code-block smaller">
                                <p>
                                    <span>someElement.addEventListener({char.SQUOTE}click{char.SQUOTE}, function() {char.LBRACE}</span>
                                    <span>    ...</span>
                                    <span>{char.RBRACE});</span>
                                </p>
                            </div>
                            <ul><li>Cannot support recursion</li></ul>
                        <li>Immediately Invoked Function Expression</li>
                            <div className="code-block smaller">
                                <p>
                                    <span>(function foo() {char.LBRACE}</span>
                                    <span>    ...</span>
                                    <span>{char.RBRACE})();</span>
                                </p>
                            </div>
                            <ul><li>Does <strong>not</strong> occupy the local scope</li></ul>
                    </ul>
                </div>
            </div>
        );
    }
}

FunctionExpressionsSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default FunctionExpressionsSlide;
