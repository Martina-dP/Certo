import { LOGIN, GET_ADMINS } from "../Action/index"

const initialState = {
    admin : {},
    allAdmins : {},
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
        // OTROS
        case LOGIN :
            const { mail, password } = payload;
            return {
                ...state,
                loginUser: {
                    mail, 
                    password
                },
            };

        default: return state;
    }
}

export default rootReducer;