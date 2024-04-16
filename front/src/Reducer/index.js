import { LOGIN, GET_ADMINS, POST_USER, NEW_PRODUCT } from "../Action/index"

const initialState = {
    admin : {},
    allAdmins : {},
    user: {},
    allUsers : {},
    newUser: {},
    loginUser: {},
    newProduct: {},
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
            // ALTAS
        case NEW_PRODUCT :
            return {
                ...state,
                newProduct : payload
            };

        default: return state;
    }
}

export default rootReducer;