import char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class TypesIQSlide extends React.Component {
    get id() {
        return 'types-iq';
    }
    get section() {
        return sections.TYPES_AND_GRAMMAR;
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
                    <div className="code-block smaller">
                        <p>
                            <span>var obj1 = {char.LBRACE}</span>
                            <span>    get a() {char.LBRACE}</span>
                            <span>        return this.b;</span>
                            <span>    {char.RBRACE},</span>
                            <span>    set a(num) {char.LBRACE}</span>
                            <span>        this.b = num;</span>
                            <span>    {char.RBRACE}</span>
                            <span>{char.RBRACE};</span>
                            <span> </span>
                            <span>var obj2 = Object.create(obj1);</span>
                            <span>obj2.a = 1;</span>
                            <span> </span>
                            <span>console.log(obj1.a); {char.COMMENT} ?</span>
                            <span>console.log(obj2.a); {char.COMMENT} ?</span>
                            <span> </span>
                            <span>var obj3 = Object.create(obj2);</span>
                            <span> </span>
                            <span>obj2.a = 2;</span>
                            <span> </span>
                            <span>console.log(obj2.a); {char.COMMENT} ?</span>
                            <span>console.log(obj3.a); {char.COMMENT} ?</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

TypesIQSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default TypesIQSlide;
