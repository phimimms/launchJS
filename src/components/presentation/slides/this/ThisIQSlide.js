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
                            <span>(function foo() &#123;</span>
                            <span>    function bar() &#123;</span>
                            <span>        this.a = this.a ? 4 : 3;</span>
                            <span>    &#125;</span>
                            <span> </span>
                            <span>    var obj1 = &#123;</span>
                            <span>        a: 1,</span>
                            <span>        bar: bar</span>
                            <span>    &#125;;</span>
                            <span> </span>
                            <span>    var obj2 = &#123;</span>
                            <span>        a: 0,</span>
                            <span>        bar: bar.bind(obj1)</span>
                            <span>    &#125;;</span>
                            <span> </span>
                            <span>    obj2.bar.call(obj2);</span>
                            <span>    console.log(obj1.a); // ?</span>
                            <span>    console.log(obj2.a); // ?</span>
                            <span>&#125;)();</span>
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
