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

// Obtener el token guardado en localStorage al cargar la app
const storedToken = localStorage.getItem("token");

const initialState = {
    admin: {},
    allAdmins: [],
    user: {},
    allUsers: {},
    newUser: {},
    loginUser: storedToken ? { token: storedToken } : {}, // Mantener sesión activa
    isAuthenticated: !!storedToken, // Definir si está autenticado
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
            const { user, token, id } = payload;
            localStorage.setItem("token", token);
            return {
                ...state,
                loginUser: { user, token, id },
                isAuthenticated: true,
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