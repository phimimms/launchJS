import char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class ScopeIntroSlide extends React.Component {
    get id() {
        return 'scope-intro';
    }
    get section() {
        return sections.SCOPE;
    }
    get title() {
        return 'Introduction';
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

        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">Scope</div>
                <div className="slide-content">
                    <ul>
                        <li>The set of rules that determines where a variable is accessible</li>
                        <li><strong>Functions create new scopes</strong></li>
                        <li><code>var</code> declares an identifier to the local scope</li>
                    </ul>
                    <div style={containerStyle}>
                        <div style={{float: 'left', width: '40%'}}>
                            <div className="code-block small">
                                <p>
                                    <span>var a = 2;</span>
                                    <span>function foo() {char.LBRACE}</span>
                                    <span>    var a = 0;</span>
                                    <span>    var bar = function() {char.LBRACE}</span>
                                    <span>        a += 1;</span>
                                    <span>    {char.RBRACE};</span>
                                    <span> </span>
                                    <span>    bar();</span>
                                    <span>    console.log(a); {char.COMMENT} 1</span>
                                    <span>{char.RBRACE}</span>
                                    <span>foo();</span>
                                    <span>console.log(a); {char.COMMENT} 2</span>
                                </p>
                            </div>
                        </div>
                        <div style={{float: 'left', width: '60%'}}>
                            <div className="circle-large yellow__transparent">bar</div>
                            <div className="circle-medium orange__transparent">foo</div>
                            <div className="circle-small red__transparent">global</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ScopeIntroSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default ScopeIntroSlide;
