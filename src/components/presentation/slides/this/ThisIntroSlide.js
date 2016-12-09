import * as char from '../../../../dictionary/characterCodes';
import React, { PropTypes } from 'react';
import * as sections from '../../../../entities/sections';
import * as slides from '../../../../entities/slides';

class ThisIntroSlide extends React.Component {
    get section() {
        return sections.THIS;
    }
    get slide() {
        return slides.THIS_INTRO;
    }

    /**
     * Instantiates the component.
     * @param {Object}  props   The initial values of instance properties
     */
    constructor(props) {
        super(props);
    }

    /**
     * Generates the HTML representation of the component.
     * @return {Element}
     */
    render() {
        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">{this.slide.title}</div>
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
