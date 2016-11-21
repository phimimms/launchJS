import char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class ScopeIQSlide extends React.Component {
    get id() {
        return 'scope-iq';
    }
    get section() {
        return sections.SCOPE;
    }
    get title() {
        return 'Interview Question';
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
                <div className="slide-header">Interview Question</div>
                <div className="slide-content">
                    <div className="code-block">
                        <p>
                            <span>(function foo() {char.LBRACE}</span>
                            <span>    function bar() {char.LBRACE}</span>
                            <span>        i = 3;</span>
                            <span>    {char.RBRACE}</span>
                            <span> </span>
                            <span>    for (var i = 0; i {char.LESSTHAN} 5; i++) {char.LBRACE}</span>
                            <span>        bar();</span>
                            <span>    {char.RBRACE}</span>
                            <span>{char.RBRACE})();</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

ScopeIQSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default ScopeIQSlide;
