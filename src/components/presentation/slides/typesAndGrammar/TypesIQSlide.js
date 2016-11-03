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
                            <span>var obj1 = &#123;</span>
                            <span>    get a() &#123;</span>
                            <span>        return this.b;</span>
                            <span>    &#125;,</span>
                            <span>    set a(num) &#123;</span>
                            <span>        this.b = num;</span>
                            <span>    &#125;</span>
                            <span>&#125;;</span>
                            <span> </span>
                            <span>var obj2 = Object.create(obj1);</span>
                            <span>obj2.a = 1;</span>
                            <span> </span>
                            <span>console.log(obj1.a); // ?</span>
                            <span>console.log(obj2.a); // ?</span>
                            <span> </span>
                            <span>var obj3 = Object.create(obj2);</span>
                            <span> </span>
                            <span>obj2.a = 2;</span>
                            <span> </span>
                            <span>console.log(obj2.a); // ?</span>
                            <span>console.log(obj3.a); // ?</span>
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
