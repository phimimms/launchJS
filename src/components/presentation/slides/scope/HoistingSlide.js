import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class HoistingSlide extends React.Component {
    get id() {
        return 'hoisting';
    }
    get section() {
        return sections.SCOPE;
    }
    get title() {
        return 'Hoisting';
    }

    constructor(props) {
        super(props);
    }

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
                <div className="slide-header">Hoisting</div>
                <div className='slide-content'>
                    <ul>
                        <li>Functions are interpreted as if <strong>all</strong> of its variable declarations were <em>hoisted</em> to its top</li>
                        <li>Prevents reference error from using a variable within its scope <strong>prior</strong> to its declaration</li>
                        <li>Function scopes are defined before execution</li>
                        <div style={containerStyle}>
                            <div style={sideContainerStyle}>
                                <h2>Hoisted</h2>
                                <div className="code-block smaller">
                                    <p>
                                        <span>function foo() &#123;</span>
                                        <span>    console.log(a); // undefined</span>
                                        <span>    var a = 1;</span>
                                        <span>&#125;</span>
                                    </p>
                                </div>
                            </div>
                            <div style={sideContainerStyle}>
                                <h2>Interpretation</h2>
                                <div className="code-block smaller">
                                    <p>
                                        <span>function foo() &#123;</span>
                                        <span>    var a;</span>
                                        <span>    console.log(a); // undefined</span>
                                        <span>    a = 1;</span>
                                        <span>&#125;</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <li>The default value to a declared variable is <code>undefined</code></li>
                    </ul>
                </div>
            </div>
        );
    }
}

HoistingSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default HoistingSlide;
