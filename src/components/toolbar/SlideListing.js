import $ from 'jquery';
import * as presentationActions from '../../actions/presentationActions';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Represents a Slide in the Toolbar
 */
const SlideListing = ({ isSelected, s }) => {
    const selectSlide = () => {
        dispatch(presentationActions.setPresentationSlide(s.slide));

        if ($.fn.fullpage) {
            $.fn.fullpage.moveTo('slides', s.props.pageNumber);
        }
    };

    return (
        <li className={`${isSelected ? 'selected': ''}`} onClick={selectSlide}>{s.slide.title}</li>
    );
};

SlideListing.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    s: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        presentationSlide: state.presentation.slide
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(presentationActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideListing);
