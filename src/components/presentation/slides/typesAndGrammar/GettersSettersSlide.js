import char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class GettersSettersSlide extends React.Component {
    get id() {
        return 'getters-and-setters';
    }
    get section() {
        return sections.TYPES_AND_GRAMMAR;
    }
    get title() {
        return 'Getters & Setters';
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
                <div className="slide-header">Getters & Setters</div>
                <div className="slide-content">
                    <div className="code-block small">
                        <p>
                            <span>var obj = {char.LBRACE}</span>
                            <span>    get a() {char.LBRACE}</span>
                            <span>        return this.b;</span>
                            <span>    {char.RBRACE},</span>
                            <span>    set a(num) {char.LBRACE}</span>
                            <span>        this.b = num;</span>
                            <span>    {char.RBRACE}</span>
                            <span>{char.RBRACE};</span>
                            <span> </span>
                            <span>obj.a = 1;</span>
                            <span>console.log(obj.a); {char.COMMENT} 1</span>
                        </p>
                    </div>
                    <ul>
                        <li>Getters define functionality for RHS evaluations</li>
                        <li>Setters define functionality for LHS evaluations</li>
                    </ul>
                </div>
            </div>
        );
    }
}

GettersSettersSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default GettersSettersSlide;
