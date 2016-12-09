import '../scss/application.scss';
import React from 'react';
import { connect } from 'react-redux';
import Presentation from './presentation/Presentation';
import Toolbar from './toolbar/Toolbar';

/**
 * The Application Container
 */
class App extends React.Component {
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
            <div id="layout">
                <Toolbar />
                <Presentation />
            </div>
        );
    }
}

App.propTypes = {};

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(App);
