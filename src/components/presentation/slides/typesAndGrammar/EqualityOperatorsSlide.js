import char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class EqualityOperatorsSlide extends React.Component {
    get id() {
        return 'equality-operators';
    }
    get section() {
        return sections.TYPES_AND_GRAMMAR;
    }
    get title() {
        return 'Equality Operators';
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
                <div className="slide-header">Equality Operators</div>
                <div className="slide-content">
                    <ul>
                        <li><code>==</code> allows coercion in the comparison and <code>===</code> disallows coercion</li>
                        <ul><li><strong>Never</strong> use <code>==</code> against a boolean value</li></ul>
                        <div className="code-block smaller">
                            <p>
                                <span>var a = {char.SQUOTE}42{char.SQUOTE};</span>
                                <span>if (a == true) {char.LBRACE} {char.COMMENT} Does not reach here {char.RBRACE}</span>
                                <span>if (a) {char.LBRACE} {char.COMMENT} Does reach here {char.RBRACE}</span>
                            </p>
                        </div>
                        <li>Objects (including arrays and functions) are <em>only</em> equal <strong>if</strong> they are both references to the <em>exact same value</em></li>
                        <ul><li><code>==</code> and <code>===</code> behave identically when two objects are being compared</li></ul>
                    </ul>
                </div>
            </div>
        );
    }
}

EqualityOperatorsSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default EqualityOperatorsSlide;
