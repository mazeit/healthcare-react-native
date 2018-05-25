
export const verifyEmail = (email) => {
    return async (dispatch, getState) => {
        
        fetch('https://spano24.com/fitnessportal/fitness/login_email/458f1f8232516673a36a86daf0d87e8b?email=' + email, {
            method: 'GET',
            mode: 'cors',
        }).then((data) => data.json()).then((json) => {
            dispatch({
                type: 'AUTHENTICATE_USER_EMAIL',
                payload: {
                            data: json,
                            userEmail:email,
                            }   
            })
        }).catch((error) => {
            console.log('There has been a problem with your fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
            });

    }
}

export const verifyPassword = (email, password) => {
    return async (dispatch, getState) => {
        
        fetch('https://spano24.com/fitnessportal/fitness/login/458f1f8232516673a36a86daf0d87e8b?email=' + email + '&passwd=' + password, {
            method: 'GET',
            mode: 'cors',
        }).then((data) => data.json()).then((json) => {
            dispatch({
                type: 'AUTHENTICATE_USER_PASSWORD',
                payload: json
            })
        }).catch((error) => {
            console.log('There has been a problem with your fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
            });

    }
}


export const addNewUser = (email, password, firstName, lastName) => {
    return async (dispatch, getState) => {
        
        fetch('https://spano24.com/fitnessportal/fitness/signup/458f1f8232516673a36a86daf0d87e8b?email='+ email + '&passwd=' + password + '&firstname=' + firstName + '&lastname=' + lastName , {
            method: 'POST',
            mode: 'cors',
        }).then((data) => data.json()).then((json) => {
            dispatch({
                type: 'ADD_NEW_USER',
                payload: json
            })
        }).catch((error) => {
            console.log('There has been a problem with your fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
            });

    }
}

export const clearSigninData = () => {
    return async (dispatch, getState) => {
        
            dispatch({
                type: 'CLEAR_SIGNIN',
                payload: ''
            })

    }
}

export const getNewPassword = (email) => {
    return async (dispatch, getState) => {
        
        fetch('https://spano24.com/fitnessportal/fitness/forgot_password/458f1f8232516673a36a86daf0d87e8b?email=' + email , {
            method: 'POST',
            mode: 'cors',
        }).then((data) => data.json()).then((json) => {
            dispatch({
                type: 'FORGOT_PASSWORD',
                payload: json
            })
        }).catch((error) => {
            console.log('There has been a problem with your fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
            });

    }
}