
const validUser = (state = {}, action) => {
    const { type, payload} = action;
    
    switch(type){
        case 'AUTHENTICATE_USER_EMAIL':
            return { ...state, validEmail: payload.data, userEmail: payload.userEmail }

        case 'AUTHENTICATE_USER_PASSWORD':
            return { ...state, validPassword: payload, user: payload.customer }

        case 'FORGOT_PASSWORD':
            return { ...state, forgotPasswordResponce: payload }

        default:
            return state;
    }
};

export default validUser;