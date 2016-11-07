import char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class PrototypesSlide extends React.Component {
    get id() {
        return 'prototypes';
    }
    get section() {
        return sections.TYPES_AND_GRAMMAR;
    }
    get title() {
        return 'Object Prototypes';
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Object Prototypes</div>
                <div className="slide-content">
                    <ul>
                        <li>A prototype links an object to another object</li>
                        <li>All compound types have the <code>Object</code> prototype in their prototype chain</li>
                        <div className="code-block small">
                            <p>
                                <span>var obj = {char.LBRACE} a: 1 {char.RBRACE};</span>
                                <span>{char.COMMENT}  obj: {char.LBRACE} a: 1 {char.RBRACE} ---> Object.prototype ---> null</span>
                                <span>var arr = [1];</span>
                                <span>{char.COMMENT}  arr: [1] ---> Array.prototype ---> Object.prototype --> null</span>
                            </p>
                        </div>
                        <li><code>Object.create()</code> returns a new object that{char.RSQUOTE}s prototype-linked to the specified object</li>
                        <div className="code-block small">
                            <p>
                                <span>var obj1 = {char.LBRACE} a: 1 {char.RBRACE};</span>
                                <span>var obj2 = Object.create(obj1);</span>
                                <span>console.log(obj2.a); {char.COMMENT} 1</span>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

PrototypesSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default PrototypesSlide;
