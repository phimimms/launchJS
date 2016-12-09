import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TableOfContents from './TableOfContents';

/**
 * The Toolbar Container
 */
const Toolbar = ({ presentationSlide, sections }) => {
    return (
        <TableOfContents
            presentationSlide={presentationSlide}
            sections={sections}
        />
    );
};

Toolbar.propTypes = {
    presentationSlide: PropTypes.object.isRequired,
    sections: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        presentationSlide: state.presentation.slide,
        sections: state.slide.sections
    };
}

export default connect(mapStateToProps)(Toolbar);
