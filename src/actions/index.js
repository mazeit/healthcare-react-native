
export const getUser = (user) => {
    console.log("the user is ",user);
    return {
        type: 'GET_USER',
        payload : user
    }
};