import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class PassingParametersSlide extends React.Component {
    get id() {
        return 'passing-parameters';
    }
    get section() {
        return sections.TYPES_AND_GRAMMAR;
    }
    get title() {
        return 'Passing Parameters';
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Passing Parameters</div>
                <div className="slide-content">
                    <ul>
                        <li>Primitive types are <strong>always</strong> passed by <em>value</em></li>
                        <div className="code-block smaller">
                            <p>
                                <span>var foo = function(p) &#123;</span>
                                <span>    p += 1;</span>
                                <span>&#125;;</span>
                                <span> </span>
                                <span>var a = 0;</span>
                                <span>foo(a);</span>
                                <span>console.log(a); // 0</span>
                            </p>
                        </div>
                        <li>Compound types are <strong>always</strong> passed by <em>reference</em></li>
                        <div className="code-block smaller">
                            <p>
                                <span>var foo = function(p) &#123;</span>
                                <span>    p.push(1);</span>
                                <span>&#125;;</span>
                                <span> </span>
                                <span>var a = [0];</span>
                                <span>foo(a);</span>
                                <span>console.log(a); // [0, 1]</span>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

PassingParametersSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default PassingParametersSlide;
