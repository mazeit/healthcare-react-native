
import { combineReducers } from 'redux';
import validUser from './validUser';
import addUser from './addUser';


const userReducer = combineReducers({
    validUser,
    addUser,
})

export default userReducer