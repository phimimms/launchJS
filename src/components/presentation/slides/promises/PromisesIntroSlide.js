import React, { PropTypes } from 'react';
import * as sections from '../../../../dictionary/sections';
import * as slides from '../../../../dictionary/slides';

class PromisesIntroSlide extends React.Component {
    get section() {
        return  sections.PROMISES;
    }

    get slide() {
        return slides.PROMISES_INTRO;
    }

    /**
     * Instantiates the Component
     * @param {Object}  props   The initial values of instance properties
     */
    constructor(props) {
        super(props);
    }

    /**
     * Generates the HTML representation of the Component
     * @return {Element}
     */
    render() {
        return (
            <div className="slide-container novetta-bg">
                <div className="slide-header">{this.slide.title}</div>
                <div className="slide-content"></div>
            </div>
        );
    }
}

PromisesIntroSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default PromisesIntroSlide;
