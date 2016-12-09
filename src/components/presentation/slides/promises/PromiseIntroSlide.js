import React, { PropTypes } from 'react';
import * as sections from '../../../../entities/sections';
import * as slides from '../../../../entities/slides';

class PromiseIntroSlide extends React.Component {
    get section() {
        return  sections.PROMISE;
    }

    get slide() {
        return slides.PROMISE_INTRO;
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
                <div className="slide-content"></div>
            </div>
        );
    }
}

PromiseIntroSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default PromiseIntroSlide;
