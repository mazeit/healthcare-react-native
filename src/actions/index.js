import * as auth from '../utils/auth';
import moment from 'moment';
const baseUrl = 'https://spano24.com/fitnessportal/fitness/';
const securityKey = '458f1f8232516673a36a86daf0d87e8b';

const ApiManager = function(url, params, excludeUserInfo) {

    let user = auth.getUser();
    let userCred = '';
    if (user && !excludeUserInfo) {
        userCred = `id_customer=${user.id}&id_lang=${user.id_lang}`;
    }
    let fullUrl = baseUrl + url;
    fullUrl = fullUrl.split('?')[0] + '/' + securityKey + '?' + (fullUrl.split('?').length > 1 ? (fullUrl.split('?')[1] + '&') : '');
    fullUrl += userCred;

    return fetch(fullUrl, {
        ...params,
        mode: 'cors',
    })
    .then((data) => {
        try {
            return data.json()
        } catch(err){
            console.log('API Error', data);
            throw err;
        }
    }).catch((error)=>{
        console.log('Got Error from url', error, fullUrl);
        throw error;
    })    
    
}

export const verifyEmail = (email) => {
    return async (dispatch, getState) => {

        return ApiManager('login_email?email=' + email, {
            method: 'GET',
        }, true).then((json) => {
            dispatch({
                type: 'AUTHENTICATE_USER_EMAIL',
                payload: {
                    data: json,
                    userEmail: email,
                }
            })
            return json;
        })
    }
}

export const verifyPassword = (email, password) => {
    return async (dispatch, getState) => {

        return ApiManager('login?email=' + email + '&passwd=' + password, {
            method: 'GET',
        }, true).then((json) => {
            dispatch({
                type: 'AUTHENTICATE_USER_PASSWORD',
                payload: json
            })
            auth.onSignIn(json);
        })

    }
}

export const autoSignin = (json) => {
    return async (dispatch, getState) => {
        auth.onSignIn(json);
        dispatch({
            type: 'AUTHENTICATE_USER_PASSWORD',
            payload: json
        })
    }
}

export const addNewUser = (email, password, firstName, lastName) => {
    return async (dispatch, getState) => {

        return ApiManager('signup?email=' + email + '&passwd=' + password + '&firstname=' + firstName + '&lastname=' + lastName, {
            method: 'POST',
        }, true).then((json) => {
            dispatch({
                type: 'ADD_NEW_USER',
                payload: json
            })
            return json;
        })

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

        return ApiManager('forgot_password?email=' + email, {
            method: 'POST',
        }, true).then((json) => {
            dispatch({
                type: 'FORGOT_PASSWORD',
                payload: json
            })
            return json;
        })

    }
}

export const getContentPillars = () => {
    return async (dispatch, getState) => {

        return ApiManager('pillars?', {
            method: 'GET',
        }).then((json) => {
            dispatch({
                type: 'GET_CONTENT_OVERVIEW_PILLARS',
                payload: json
            })
            return json;
        })

    }
}

export const getPillarData = (pillarName) => {
    return async (dispatch, getState) => {

        return ApiManager('pillars?pillar=' + pillarName, {
            method: 'POST',
        }).then((json) => {
            console.log(json);
            dispatch({
                type: 'GET_PILLAR_DATA',
                payload: json
            })
            return json;
        })

    }
}

export const addFavorite = (id_content, pillarName) => {
    return async (dispatch, getState) => {

        return ApiManager('addtofavorite?id_content=' + id_content + '&type=' + pillarName, {
            method: 'POST',
        }).then((json) => {
            dispatch({
                type: 'ADD_FAVORITE',
                payload: json
            })
            return json;
        })

    }
}

export const removeFavorite = (id_content, pillarName) => {
    return async (dispatch, getState) => {

        return ApiManager('removefavorite?id_content=' + id_content + '&type=' + pillarName, {
            method: 'POST',
        }).then((json) => {
            dispatch({
                type: 'REMOVE_FAVORITE',
                payload: json
            })
            return json;
        })

    }
}

export const addChallenge = (id_content, pillarName) => {
    return async (dispatch, getState) => {

        return ApiManager('addtofavorite?id_content=' + id_content + '&event=' + pillarName + '&date=' + moment().format('YYYY-MM-DD'), {
            method: 'POST',
        }).then((json) => {
            return json;
        })

    }
}

export const removeChallenge = (id_content, pillarName) => {
    return async (dispatch, getState) => {

        return ApiManager('removefavorite?id_content=' + id_content + '&type=' + pillarName, {
            method: 'POST',
        }).then((json) => {
            return json;
        })

    }
}

export const getFAQ = () => {
    return async (dispatch, getState) => {

        return ApiManager('faq?', {
            method: 'GET',
        }).then((json) => {
            dispatch({
                type: 'GET_FAQ',
                payload: json
            });
            return json;
        })

    }
}

export const getInvitedFriendsData = () => {

    return async (dispatch, getState) => {

        return ApiManager('invitemyfriend?invitedfriends=true', {
            method: 'POST',
        }).then((json) => {
            dispatch({
                type: 'GET_INVITED_FRIENDS',
                payload: json
            })
            return json;
        })

    }
}

export const inviteFriend = (friendFirstname, friendLastname, friendEmail) => {

    return async (dispatch, getState) => {

        return ApiManager('invitemyfriend?friendfirstname=' + friendFirstname + '&friendlastname=' + friendLastname + '&friendemail=' + friendEmail + '&submitinvite=true', {
            method: 'POST',
        }).then((json) => {
            dispatch({
                type: 'INVITE_FRIEND',
                payload: json
            })
            return json;
        })

    }
}

export const sendReminder = (friend_id, friendFirstname, friendLastname, friendEmail) => {

    return async (dispatch, getState) => {

        return ApiManager('invitemyfriend?id_customer=' + friend_id + '&friendfirstname=' + friendFirstname + '&friendlastname=' + friendLastname + '&friendemail=' + friendEmail + '&sendreminder=true', {
            method: 'POST',
        }, true).then((json) => {
            dispatch({
                type: 'INVITE_FRIEND_REMINDER',
                payload: json
            })
            return json;
        })

    }
}

export const getCalendarData = () => {

    return async (dispatch, getState) => {

        return ApiManager('calenderplan?', {
            method: 'POST',
        }).then((json) => {
            dispatch({
                type: 'GET_CALENDAR_DATA',
                payload: json
            })
            return json;
        })

    }
}

export const getActivity = (activity_id, page) => {

    return async (dispatch, getState) => {

        return ApiManager('contents?id_content=' + activity_id, {
            method: 'POST',
        }).then((json) => {

            dispatch({
                type: page === 'show' ? 'GET_ACTIVITY_DATA' : 'GET_ADD_ACTIVITY_DATA',
                payload: json
            })
            return json;
        })

    }
}

export const addActivity = (id_content, event, date) => {

    return async (dispatch, getState) => {

        return ApiManager('addtomychallenge?id_content=' + id_content + '&event=' + event + '&date=' + date, {
            method: 'POST',
        }).then((json) => {
            dispatch({
                type: 'ADD_EVENT',
                payload: json
            })
            return json;
        })

    }
}