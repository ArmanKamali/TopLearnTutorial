import {combineReducers} from 'redux'
import {courseReducer} from './coursesReducer'
import {userReducer} from './usersReducer'

export const reducers = combineReducers({
    courses : courseReducer,
    user : userReducer
})


