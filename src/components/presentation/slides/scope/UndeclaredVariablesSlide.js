import * as char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import * as sections from '../../../../entities/sections';
import * as slides from '../../../../entities/slides';

class UndeclaredVariablesSlide extends React.Component {
    get section() {
        return sections.SCOPE;
    }
    get slide() {
        return slides.SCOPE_UNDECLARED_VARIABLES;
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
                <div className="slide-header">{this.slide.title}</div>
                <div className="slide-content">
                    <div style={containerStyle}>
                        <div style={sideContainerStyle}>
                            <h1>Left-Hand Side</h1>
                            <div className="code-block small">
                                <p>
                                    <span>function foo() {char.LBRACE}</span>
                                    <span>    a = 1;</span>
                                    <span>{char.RBRACE}</span>
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
                                    <span>function bar() {char.LBRACE}</span>
                                    <span>    var a = 2 * b;</span>
                                    <span>{char.RBRACE}</span>
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

UndeclaredVariablesSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default UndeclaredVariablesSlide;
