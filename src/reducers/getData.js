const getData = (state = {}, action) => {
    const { type, payload} = action;
    switch(type){
    
        case 'GET_CONTENT_OVERVIEW_PILLARS':
            return { ...state, contentPillars: payload }

        case 'GET_PILLAR_DATA':
            return { ...state, pillarData: payload }

        case 'GET_FAQ':
            return { ...state, FaqData: payload }

        case 'GET_INVITED_FRIENDS':
            return { ...state, invitedFriendData: payload }

        case 'GET_CALENDAR_DATA':
            return { ...state, calendarData: payload }

        default:
            return state;
    }
};

export default getData;
