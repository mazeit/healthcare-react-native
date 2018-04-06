
export const getUser = (email) => {
    return async (dispatch, getState) => {
        fetch('https://spano24.com/fitnessportal/fitness/login_email/458f1f8232516673a36a86daf0d87e8b?email=' + email, {
            method: 'GET',
            mode: 'cors',
        }).then((data) => data.json()).then((json) => {
            dispatch({
                type: 'GET_USER',
                payload: json
            })
        }).catch((error) => {
            console.log('There has been a problem with your fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
            });

    }
}