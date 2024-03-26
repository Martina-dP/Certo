import axios from "axios";

    // USERS
export const GET_ADMINS = "GET_ADMINS";
export const POST_USER = "POST_USER";

    // OTROS
export const LOGIN = "LOGIN";

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
        console.log(input, "input action")
        return dispatch({
            type : "LOGIN",
            payload : json.data
        })
    }
}