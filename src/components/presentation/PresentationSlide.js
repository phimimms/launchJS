import React, { PropTypes } from 'react';

/**
 * Renders the Slide Components in the Presentation
 */
const PresentationSlide = ({ slideComponents }) => {
    return (
        <div id="fullpage" className="unselectable">
            <div id="slides" className="section" data-anchor="slides">
                { slideComponents.map((Slide, pageNumber) =>
                    <div
                        key={new Slide({pageNumber}).slide.id}
                        id={`section${pageNumber}`}
                        className="slide"
                        >
                        <Slide />
                    </div>
                )}
            </div>
        </div>
    );
};

PresentationSlide.propTypes = {
    slideComponents: PropTypes.array.isRequired
};

export default PresentationSlide;
