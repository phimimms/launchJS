import React, { PropTypes } from 'react';
import sections from '../../../../dictionary/sections';

class PromisesIntroSlide extends React.Component {
    get id() {
        return 'promise-intro';
    }
    get section() {
        return  sections.PROMISES;
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
                <div className="slide-header">Promises</div>
                <div className="slide-content"></div>
            </div>
        );
    }
}

PromisesIntroSlide.propTypes = {
    pageNumber: PropTypes.number
};

export default PromisesIntroSlide;
