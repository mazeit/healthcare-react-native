const addUser = (state = {}, action) => {
    const { type, payload} = action;
    
    switch(type){
    
        case 'ADD_NEW_USER':
            return { ...state, addUserSuccess: payload }

        default:
            return state;
    }
};

export default addUser;