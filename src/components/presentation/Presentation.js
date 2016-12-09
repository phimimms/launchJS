import PresentationSlide from './PresentationSlide';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

/**
 * The Presentation Container
 */
const Presentation = ({ slideComponents }) => {
    return (
        <PresentationSlide
            slideComponents={slideComponents}
        />
    );
};

Presentation.propTypes = {
    slideComponents: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        slideComponents: state.slide.components
    };
}

export default connect(mapStateToProps)(Presentation);
