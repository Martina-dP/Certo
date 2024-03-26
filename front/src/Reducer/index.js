import { LOGIN, GET_ADMINS, POST_USER } from "../Action/index"

const initialState = {
    admin : {},
    allAdmins : {},
    user: {},
    allUsers : {},
    newUser: {},
    loginUser: {},
 };

function rootReducer (state = initialState, { type, payload }) {
    switch(type) {
        // USERS
        case GET_ADMINS :
            return {
                ...state,
                admin : payload,
                allAdmins : payload
            };
        case POST_USER :
            return {
                ...state,
                newUser : payload,
            };
        // OTROS
        case LOGIN :
            const { user, password, token, id, validate } = payload;
            return {
                ...state,
                loginUser: {
                    user, 
                    password,
                    token,
                    id,
                    validate
                },
            };

        default: return state;
    }
}

export default rootReducer;