
const validUser = (state = {}, action) => {
    const { type, payload} = action;
    
    switch(type){
        case 'AUTHENTICATE_USER_EMAIL':
            return { ...state, validEmail: payload.data, userEmail: payload.userEmail }

        case 'AUTHENTICATE_USER':
            return { ...state, validPassword: payload, user: payload.customer }

        case 'FORGOT_PASSWORD':
            return { ...state, forgotPasswordResponce: payload }

        case 'SIGNOUT':
            state = {};
            return state;
        case 'UPATE_PROFILE_INFO':

            return { ...state, user: {...action.payload} }
        case 'UPDATE_NOTIFICATION':
            return { ...state, notifiInfo: {...state.notifiInfo, ...action.payload} }
        case 'GET_NOTIFICATION':
            return { ...state, notifiInfo: {...action.payload} }

        default:
            return state;
    }
};

export default validUser;