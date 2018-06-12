const addUser = (state = {}, action) => {
    const { type, payload} = action;
    
    switch(type){
    
        case 'ADD_NEW_USER':
            return { ...state, addUserSuccess: payload }

        case 'ADD_FAVORITE':
            return { ...state, addFavResponce: payload }

        case 'REMOVE_FAVORITE':
            return { ...state, removeFavResponce: payload }

        case 'INVITE_FRIEND':
            return { ...state, inviteFriendSuccess: payload }
        
        case 'INVITE_FRIEND_REMINDER':
            return { ...state, success: payload }

        case 'ADD_EVENT':
            return { ...state, addEventResponse: payload }

        default:
            return state;
    }
};

export default addUser;