import char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class UndeclaredVariablesSlide extends React.Component {
    get id() {
        return 'undeclared-variables';
    }
    get section() {
        return sections.SCOPE;
    }
    get title() {
        return 'Undeclared Variables';
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
                <div className="slide-header">Undeclared Variables</div>
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