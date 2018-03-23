
import { combineReducers } from 'redux';
import users from './users';


const userReducer = combineReducers({
    users,
})

export default userReducer