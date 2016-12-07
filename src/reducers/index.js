import { combineReducers } from 'redux';

/* Reducers */
import presentation from './presentationReducer';
import slides from './slideReducer';

/* The Root Reducer of the Redux Store */
const rootReducer = combineReducers({
    presentation,
    slides
});

export default rootReducer;
