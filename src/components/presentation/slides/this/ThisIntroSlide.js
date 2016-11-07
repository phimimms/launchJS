import char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class ThisIntroSlide extends React.Component {
    get id() {
        return 'this-intro';
    }
    get section() {
        return sections.THIS;
    }
    get title() {
        return 'Introduction';
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">this</div>
                <div className="slide-content">
                    <ul>
                        <li>What is <code>this</code>?</li>
                        <ul><li>A runtime binding based on the conditions of the function{char.SQUOTE}s invocation</li></ul>
                        <li>So... What is <code>this</code>?</li>
                        <ul><li>An object whose value is dependent on how the currently executed function was called</li></ul>
                    </ul>
                </div>
            </div>
        );
    }
}

ThisIntroSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default ThisIntroSlide;
