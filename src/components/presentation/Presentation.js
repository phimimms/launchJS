import PresentationSlide from './PresentationSlide';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as slideActions from '../../actions/slideActions';

class Presentation extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

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
