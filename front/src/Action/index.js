import axios from "axios";

    // USERS
export const GET_ADMINS = "GET_ADMINS";
export const POST_USER = "POST_USER";

    // OTROS
export const LOGIN = "LOGIN";

    // ALTAS
export const NEW_PRODUCT = "NEW_PRODUCT";
export const GET_CATEGORY = "GET_CATEGORY";
export const GET_SUB_CATEGORY = "GET_SUB_CATEGORY";

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
export function login (input) {
    return async function(dispatch){
        var json = await axios.post(`http://localhost:3001/logIn`, input)
        return dispatch({
            type : "LOGIN",
            payload : json.data
        })
    }
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
    export function loadProduct (input) {
        return async function(dispatch){
            var json = await axios.post(`http://localhost:3001/newProduct`, input)
            return dispatch({
                type : "NEW_PRODUCT",
                payload : json.data
            })
        }
    }