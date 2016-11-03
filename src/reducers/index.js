import { combineReducers } from 'redux';
import slides from './slideReducer';

const rootReducer = combineReducers({
    slides
});

export default rootReducer;
