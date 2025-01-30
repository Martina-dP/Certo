import axios from "axios";

    // USERS
export const GET_ADMINS = "GET_ADMINS";
export const POST_USER = "POST_USER";

    // OTROS
export const LOGIN = "LOGIN";

    // ALTAS
export const NEW_CLIENT = "NEW_CLIENT"
export const NEW_PRODUCT = "NEW_PRODUCT";
export const GET_CATEGORY = "GET_CATEGORY";
export const NEW_CATEGORY = "NEW_CATEGORY";
export const NEW_SUB_CATEGORY = "NEW_SUB_CATEGORY";
export const GET_SUB_CATEGORY = "GET_SUB_CATEGORY";
export const NEW_PROVIDER = "NEW_PROVIDER";

    // USERS
export function getAdmins () {
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/admins")
        return dispatch({
            type : "GET_ADMINS",
            payload : json.data
        })
    }
}

export function createAccount (input) {
    return async function(dispatch){
        var json = await axios.post("http://localhost:3001/createUser", input)
        return dispatch({
            type : "POST_USER",
            payload : json.data
        })
    }
}

    // OTROS
export function login(input) {
    return async function (dispatch) {
        try {
        const response = await axios.post(`http://localhost:3001/logIn`, input);
    
        const { token, user, role } = response.data; // Extraer token y datos del usuario
    
        // Guardar el token en localStorage para persistencia
        localStorage.setItem("token", token);
    
        dispatch({
            type: "LOGIN",
            payload: { user, role, token },
        });
    
        return response.data; // Retornar datos para manejar la navegación
        } catch (error) {
        console.error("Error en login:", error);
        throw error; // Lanzar error para manejarlo en el componente Login
        }
    };
    }

export function getCategories () {
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/categories")
        return dispatch({
            type : "GET_CATEGORY",
            payload : json.data
        })
    }
}

export function getSubCategories () {
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/subCategories")
        return dispatch({
            type : "GET_SUB_CATEGORY",
            payload : json.data
        })
    }
}

    // ALTAS
    export function loadClient (input) {
        return async function(dispatch){
            var json = await axios.post(`http://localhost:3001/newClient`, input)
            return dispatch({
                type : "NEW_CLIENT",
                payload : json.data
            })
        }
    }

    export function loadProduct (input) {
        return async function(dispatch){
            var json = await axios.post(`http://localhost:3001/newProduct`, input)
            return dispatch({
                type : "NEW_PRODUCT",
                payload : json.data
            })
        }
    }

    export function loadCategory (input) {
        return async function(dispatch){
            var json = await axios.post(`http://localhost:3001/loadCategory`, input)
            return dispatch({
                type : "NEW_CATEGORY",
                payload : json.data
            })
        }
    }

    export function loadSubCategory (input) {
        return async function(dispatch){
            var json = await axios.post(`http://localhost:3001/loadSubCategory`, input)
            console.log(json, "json action")
            return dispatch({
                type : "NEW_SUB_CATEGORY",
                payload : json.data
            })
        }
    }

    export function loadProvider (input) {
        return async function(dispatch){
            var json = await axios.post(`http://localhost:3001/newProvider`, input)
            console.log(json, "json action")
            return dispatch({
                type : "NEW_PROVIDER",
                payload : json.data
            })
        }
    }