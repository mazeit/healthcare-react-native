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
    console.log(fullUrl);
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

export const getSearchContent = (keyword) => {
    return async (dispatch, getState) => {

        return ApiManager('search?q=' + keyword, {
            method: 'POST',
        }).then((json) => {
            dispatch({
                type: 'GET_SEARCH_CONTENT',
                payload: json
            })
            return json;
        })

    }
}

export const getMyFavorites = () => {
    return async (dispatch, getState) => {

        return ApiManager('myfavorites?', {
            method: 'POST',
        }).then((json) => {
            dispatch({
                type: 'GET_MY_FAVORITES',
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

export const getActivity = (activity_id) => {

    return async (dispatch, getState) => {

        return ApiManager('contents?id_content=' + activity_id, {
            method: 'POST',
        }).then((json) => {

            dispatch({
                type: 'GET_ACTIVITY_DATA',
                payload: json
            })
            return json;
        })

    }
}

export const getRecipe = (recipe_id) => {

    return async (dispatch, getState) => {

        return ApiManager('recipes?id_recipe=' + recipe_id, {
            method: 'POST',
        }).then((json) => {

            dispatch({
                type: 'GET_RECIPE_DATA',
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

export const removeActivity = (id_content, date) => {

    return async (dispatch, getState) => {

        return ApiManager('removemychallenge?id_content=' + id_content + '&date=' + date, {
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

export const getImportantNotification = () => {

    return async (dispatch, getState) => {

        return ApiManager('importantn?', {
            method: 'POST',
        }).then((json) => {
            dispatch({
                type: 'GET_IMPORTANT_NOTOFICATION',
                payload: json
            })
            return json;
        })

    }
}

export const getWelcome = () => {

    return async (dispatch, getState) => {

        return ApiManager('welcome?', {
            method: 'POST',
        }).then((json) => {
            dispatch({
                type: 'GET_WELCOME',
                payload: json
            })
            return json;
        })

    }
}

export const getQuestionGroup = () => {

    return async (dispatch, getState) => {

        return ApiManager('questiongroup?', {
            method: 'POST',
        }).then((json) => {
            dispatch({
                type: 'GET_QUESTION_GROUP',
                payload: json
            })
            return json;
        })

    }
}


export const getQuestionaire = (id_question_category) => {

    return async (dispatch, getState) => {
        return ApiManager('questionnaire?id_question_category=' + id_question_category, {
            method: 'POST',
        }).then((json) => {
            dispatch({
                type: 'GET_QUESTIONARIE',
                payload: json
            })
            return json;
        })

    }
}



export const getlfmagazinepost = (id_question_category) => {

    return async (dispatch, getState) => {
        return ApiManager('lfmagazinepost?page=1', {
            method: 'GET',
        }).then((json) => {
            dispatch({
                type: 'GET_QUESTIONARIE',
                payload: json
            })
            return json;
        })

    }
}


export const getlfmagazinepostById= (id_post) => {

    return async (dispatch, getState) => {
        return ApiManager('lfmagazinepost?id_post=' + id_post, {
            method: 'POST',
        }).then((json) => {
            dispatch({
                type: 'GET_QUESTIONARIE',
                payload: json
            })
            return json;
        })

    }
}

export const lfmagazineauthor = () => {

    return async (dispatch, getState) => {
        return ApiManager('lfmagazineauthor', {
            method: 'POST',
        }).then((json) => {
            dispatch({
                type: 'GET_QUESTIONARIE',
                payload: json
            })
            return json;
        })

    }
}


export const lfmagazineauthorById = (id_author) => {

    return async (dispatch, getState) => {
        return ApiManager('lfmagazineauthor?id_author=' + id_author, {
            method: 'POST',
        }).then((json) => {
            dispatch({
                type: 'GET_QUESTIONARIE',
                payload: json
            })
            return json;
        })

    }
}

export const answerQuestion = (id_question_category, id_question, id_answers) => {

    return async (dispatch, getState) => {
        return ApiManager('customerquestionnaire?id_question_category=' + id_question_category + '&id_question=' + id_question + '&id_answers=' + id_answers, {
            method: 'POST',
        }).then((json) => {
            dispatch({
                type: 'GET_QUESTIONARIE',
                payload: json
            })
            return json;
        })

    }
}