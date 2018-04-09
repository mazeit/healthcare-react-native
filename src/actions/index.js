
export const verifyEmail = (email) => {
    return async (dispatch, getState) => {
        
        fetch('https://spano24.com/fitnessportal/fitness/login_email/458f1f8232516673a36a86daf0d87e8b?email=' + email, {
            method: 'GET',
            mode: 'cors',
        }).then((data) => data.json()).then((json) => {
            dispatch({
                type: 'AUTHENTICATE_USER_EMAIL',
                payload: json
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