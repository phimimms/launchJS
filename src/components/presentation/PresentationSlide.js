import React, { PropTypes } from 'react';

/**
 * Generates the Slides in the Presentation
 */
const PresentationSlide = ({slides}) => {
    return (
        <div id="fullpage" className="unselectable">
            <div id="slides" className="section" data-anchor="slides">
                {slides.map((Slide, i) =>
                    <div key={new Slide().id} id={'section' + i} className="slide">
                        <Slide />
                    </div>
                )}
            </div>
        </div>
    );
};

PresentationSlide.propTypes = {
    slides: PropTypes.array.isRequired
};

export default PresentationSlide;
