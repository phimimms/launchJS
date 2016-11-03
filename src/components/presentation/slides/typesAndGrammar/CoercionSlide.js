import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class CoercionSlide extends React.Component {
    get id() {
        return 'coercion';
    }
    get section() {
        return sections.TYPES_AND_GRAMMAR;
    }
    get title() {
        return 'Coercion';
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Coercion</div>
                <div className="slide-content">
                    <ul>
                        <li>Implicit conversion of one type to another</li>
                        <li><strong>Always</strong> results to a primitive type</li>
                        <li>String to Number:</li>
                            <div className="code-block smaller">
                                <p>
                                    <span>var a = '15';</span>
                                    <span>console.log(+a);     // 15</span>
                                    <span>console.log(+a + 1); // 16</span>
                                </p>
                            </div>
                        <li>Number to String:</li>
                            <div className="code-block smaller">
                                <p>
                                    <span>var a = 15;</span>
                                    <span>console.log(a + '');  // '15'</span>
                                    <span>console.log(a + '1'); // '151'</span>
                                </p>
                            </div>
                        <li>Anything to Boolean:</li>
                            <div className="code-block smaller">
                                <p>
                                    <span>var a = 15;</span>
                                    <span>console.log(!a);  // false</span>
                                    <span>console.log(!!a); // true</span>
                                </p>
                            </div>
                    </ul>
                </div>
            </div>
        );
    }
}

CoercionSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default CoercionSlide;
