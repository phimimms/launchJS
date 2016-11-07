import char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class ThisIQSlide extends React.Component {
    get id() {
        return 'this-iq';
    }
    get section() {
        return sections.THIS;
    }
    get title() {
        return 'Interview Question';
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Interview Question</div>
                <div className="slide-content">
                    <div className="code-block smaller">
                        <p>
                            <span>(function foo() {char.LBRACE}</span>
                            <span>    function bar() {char.LBRACE}</span>
                            <span>        this.a = this.a ? 4 : 3;</span>
                            <span>    {char.RBRACE}</span>
                            <span> </span>
                            <span>    var obj1 = {char.LBRACE}</span>
                            <span>        a: 1,</span>
                            <span>        bar: bar</span>
                            <span>    {char.RBRACE};</span>
                            <span> </span>
                            <span>    var obj2 = {char.LBRACE}</span>
                            <span>        a: 0,</span>
                            <span>        bar: bar.bind(obj1)</span>
                            <span>    {char.RBRACE};</span>
                            <span> </span>
                            <span>    obj2.bar.call(obj2);</span>
                            <span>    console.log(obj1.a); {char.COMMENT} ?</span>
                            <span>    console.log(obj2.a); {char.COMMENT} ?</span>
                            <span>{char.RBRACE})();</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

ThisIQSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default ThisIQSlide;
