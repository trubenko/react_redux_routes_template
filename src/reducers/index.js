import {combineReducers} from 'redux'
import blockReducer from './blockReducer'

const rootReducer = combineReducers({
    block: blockReducer
});

export default rootReducer;