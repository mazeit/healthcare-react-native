
const users = (state = {}, action) => {
    const { type, payload} = action;

    switch(type){
        case 'GET_USER':
            state = payload
            console.log("store", state);
            return state;
        default:
            return state;
    }
};

export default users;