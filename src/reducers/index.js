import { combineReducers } from 'redux'
import UserReducer from './user_reducer'
import Reducer1 from './reducer1'

const rootReducer = combineReducers({
    user_reducer: UserReducer,
    reducer1: Reducer1
})

export default rootReducer;