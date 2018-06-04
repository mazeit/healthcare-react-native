
import { combineReducers } from 'redux';
import validUser from './validUser';
import addUser from './addUser';
import getData from './getData';


const userReducer = combineReducers({
    validUser,
    addUser,
    getData,
})

export default userReducer