import $ from 'jquery';
import React, { PropTypes } from 'react';

const SlideListing = ({slide}) => {
    const selectSlide = () => {
        if ($.fn.fullpage) {
            $.fn.fullpage.moveTo('slides', slide.props.pageNumber);
        }
    };

    return (
        <li onClick={selectSlide}>{slide.title}</li>
    );
};

SlideListing.propTypes = {
    slide: PropTypes.object.isRequired
};

export default SlideListing;
