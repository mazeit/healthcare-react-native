
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
                    userEmail: email,
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

        fetch('https://spano24.com/fitnessportal/fitness/signup/458f1f8232516673a36a86daf0d87e8b?email=' + email + '&passwd=' + password + '&firstname=' + firstName + '&lastname=' + lastName, {
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

export const signOut = () => {
    return async (dispatch, getState) => {

        dispatch({
            type: 'SIGNOUT',
            payload: ''
        })

    }
}

export const getNewPassword = (email) => {
    return async (dispatch, getState) => {

        fetch('https://spano24.com/fitnessportal/fitness/forgot_password/458f1f8232516673a36a86daf0d87e8b?email=' + email, {
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

export const getContentPillars = () => {
    return async (dispatch, getState) => {

        fetch('https://spano24.com/fitnessportal/fitness/pillars/458f1f8232516673a36a86daf0d87e8b', {
            method: 'GET',
            mode: 'cors',
        }).then((data) => data.json()).then((json) => {
            dispatch({
                type: 'GET_CONTENT_OVERVIEW_PILLARS',
                payload: json
            })
        }).catch((error) => {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });

    }
}

export const getPillarData = (pillarName, userId, userLanguage) => {
    return async (dispatch, getState) => {

        fetch('https://spano24.com/fitnessportal/fitness/pillars/458f1f8232516673a36a86daf0d87e8b?pillar=' + pillarName + '&id_customer=' + userId + '&id_lang=' + userLanguage, {
            method: 'POST',
            mode: 'cors',
        }).then((data) => data.json()).then((json) => {
            dispatch({
                type: 'GET_PILLAR_DATA',
                payload: json
            })
        }).catch((error) => {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });

    }
}

export const addFavorite = (user_id, id_content, pillarName) => {
    return async (dispatch, getState) => {

        fetch('https://spano24.com/fitnessportal/fitness/addtofavorite/458f1f8232516673a36a86daf0d87e8b?id_customer=' + user_id + '&id_content=' + id_content + '&type=' + pillarName, {
            method: 'POST',
            mode: 'cors',
        }).then((data) => data.json()).then((json) => {
            dispatch({
                type: 'ADD_FAVORITE',
                payload: json
            })
        }).catch((error) => {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });

    }
}

export const removeFavorite = (user_id, id_content, pillarName) => {
    return async (dispatch, getState) => {

        fetch('https://spano24.com/fitnessportal/fitness/removefavorite/458f1f8232516673a36a86daf0d87e8b?id_customer=' + user_id + '&id_content=' + id_content + '&type=' + pillarName, {
            method: 'POST',
            mode: 'cors',
        }).then((data) => data.json()).then((json) => {
            dispatch({
                type: 'REMOVE_FAVORITE',
                payload: json
            })
        }).catch((error) => {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });

    }
}

export const getFAQ = () => {
    return async (dispatch, getState) => {

        fetch('https://spano24.com/fitnessportal/fitness/faq/458f1f8232516673a36a86daf0d87e8b', {
            method: 'GET',
            mode: 'cors',
        }).then((data) => data.json()).then((json) => {
            dispatch({
                type: 'GET_FAQ',
                payload: json
            })
        }).catch((error) => {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });

    }
}

export const getInvitedFriendsData = (user_id) => {

    return async (dispatch, getState) => {

        fetch('https://spano24.com/fitnessportal/fitness/invitemyfriend/458f1f8232516673a36a86daf0d87e8b?id_customer=' + user_id + '&invitedfriends=true', {
            method: 'POST',
            mode: 'cors',
        }).then((data) => data.json()).then((json) => {
            dispatch({
                type: 'GET_INVITED_FRIENDS',
                payload: json
            })
        }).catch((error) => {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });

    }
}

export const inviteFriend = (user_id, friendFirstname, friendLastname, friendEmail) => {

    return async (dispatch, getState) => {

        fetch('https://spano24.com/fitnessportal/fitness/invitemyfriend/458f1f8232516673a36a86daf0d87e8b?id_customer=' + user_id + '&friendfirstname=' + friendFirstname + '&friendlastname=' + friendLastname + '&friendemail=' + friendEmail + '&submitinvite=true', {
            method: 'POST',
            mode: 'cors',
        }).then((data) => data.json()).then((json) => {
            dispatch({
                type: 'INVITE_FRIEND',
                payload: json
            })
        }).catch((error) => {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });

    }
}

export const sendReminder = (user_id, friendFirstname, friendLastname, friendEmail) => {

    return async (dispatch, getState) => {

        fetch('https://spano24.com/fitnessportal/fitness/invitemyfriend/458f1f8232516673a36a86daf0d87e8b?id_customer=' + user_id + '&friendfirstname=' + friendFirstname + '&friendlastname=' + friendLastname + '&friendemail=' + friendEmail + '&sendreminder=true', {
            method: 'POST',
            mode: 'cors',
        }).then((data) => data.json()).then((json) => {
            dispatch({
                type: 'INVITE_FRIEND_REMINDER',
                payload: json
            })
        }).catch((error) => {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });

    }
}

export const getCalendarData = (user_id) => {

    return async (dispatch, getState) => {

        fetch('https://spano24.com/fitnessportal/fitness/calenderplan/458f1f8232516673a36a86daf0d87e8b?id_customer=' + user_id, {
            method: 'POST',
            mode: 'cors',
        }).then((data) => data.json()).then((json) => {
            dispatch({
                type: 'GET_CALENDAR_DATA',
                payload: json
            })
        }).catch((error) => {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });

    }
}

export const getActivity = (activity_id, page) => {

    return async (dispatch, getState) => {

        fetch('https://spano24.com/fitnessportal/fitness/contents/458f1f8232516673a36a86daf0d87e8b?id_content=' + activity_id, {
            method: 'POST',
            mode: 'cors',
        }).then((data) => data.json()).then((json) => {

            dispatch({
                type: page === 'show' ? 'GET_ACTIVITY_DATA' : 'GET_ADD_ACTIVITY_DATA',
                payload: json
            })
        }).catch((error) => {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });

    }
}

export const addActivity = (customer_id, id_content, event, date) => {

    return async (dispatch, getState) => {

        fetch('https://spano24.com/fitnessportal/fitness/addtomychallenge/458f1f8232516673a36a86daf0d87e8b?id_customer=' + customer_id + '&id_content=' + id_content + '&event=' + event + '%202&date=' + date, {
            method: 'POST',
            mode: 'cors',
        }).then((data) => data.json()).then((json) => {
            dispatch({
                type: 'ADD_EVENT',
                payload: json
            })
        }).catch((error) => {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });

    }
}