import PresentationSlide from './PresentationSlide';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as slideActions from '../../actions/slideActions';

/**
 * The Presentation
 */
class Presentation extends React.Component {
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
        const { slides } = this.props;

        return (
            <PresentationSlide slides={slides} />
        );
    }
}

Presentation.propTypes = {
    actions: PropTypes.object.isRequired,
    slides: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        slides: state.slides
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(slideActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
