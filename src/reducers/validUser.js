
const validUser = (state = {}, action) => {
    const { type, payload} = action;

    switch(type){
        case 'AUTHENTICATE_USER_EMAIL':
            return { ...state, validEmail: payload }

        case 'AUTHENTICATE_USER_PASSWORD':
            return { ...state, validPassword: payload, user: payload.customer }

        default:
            return state;
    }
};

export default validUser;