import { 
    LOGIN, 
    GET_ADMINS, 
    POST_USER, 
    NEW_PRODUCT, 
    GET_CATEGORY, 
    GET_SUB_CATEGORY, 
    NEW_CATEGORY, 
    NEW_SUB_CATEGORY, 
    NEW_PROVIDER 
} from "../Action/index";

const initialState = {
    admin: {},
    allAdmins: [],
    user: {},
    allUsers: {},
    newUser: {},
    loginUser: {},
    newProduct: {},
    categories: [],
    newCategory: {},
    newSubCategory: {},
    subCategories: [],
};

function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        // USERS
        case GET_ADMINS:
            return {
                ...state,
                admin: payload,
                allAdmins: payload
            };
        case POST_USER:
            return {
                ...state,
                newUser: payload,
            };
        case LOGIN:
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
        // PRODUCTS
        case NEW_PRODUCT:
            return {
                ...state,
                newProduct: payload
            };
        // CATEGORIES
        case GET_CATEGORY:
            return {
                ...state,
                categories: payload,
            };
        case NEW_CATEGORY:
            return {
                ...state,
                newCategory: payload,
            };
        // SUB-CATEGORIES
        case NEW_SUB_CATEGORY:
            return {
                ...state,
                newSubCategory: payload,
            };
        case GET_SUB_CATEGORY:
            return {
                ...state,
                subCategories: payload,
            };
        // PROVIDERS
        case NEW_PROVIDER:
            return {
                ...state,
            };
        default: 
            return state;
    }
}

export default rootReducer;