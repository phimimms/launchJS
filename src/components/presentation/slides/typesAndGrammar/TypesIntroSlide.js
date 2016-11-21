import char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class TypesIntroSlide extends React.Component {
    get id() {
        return 'types-grammar';
    }
    get section() {
        return sections.TYPES_AND_GRAMMAR;
    }
    get title() {
        return 'Introduction';
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
                <div className="slide-header">Types & Grammar</div>
                <div className="slide-content">
                    <ul>
                        <li>Javascript is <strong>not</strong> a typed language</li>
                        <div className="code-block small">
                            <p>
                                <span>var a = {char.SQUOTE}I am a string{char.SQUOTE};</span>
                                <span>a = [{char.SQUOTE}Now I am an array{char.SQUOTE}];</span>
                            </p>
                        </div>
                        <ul><li>Variables don{char.RSQUOTE}t have types -- <em>values</em> have types</li></ul>
                        <li>Primitive Types:</li>
                            <ul>
                                <li><code>Boolean</code>, <code>Null</code>, <code>Undefined</code>, <code>Number</code>, <code>String</code></li>
                            </ul>
                        <li>Compound Types:</li>
                            <ul>
                                <li><code>Object</code>, <code>Array</code>, <code>Function</code>, <code>Date</code>, <code>RegExp</code></li>
                            </ul>
                    </ul>
                </div>
            </div>
        );
    }
}

TypesIntroSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default TypesIntroSlide;
