export const LOGGED_IN_ID = (payload)=>{
    return {type:"LOGGED_IN_ID",payload}
}
export const LOG_IN_STATUS = ()=>{
    return {type:"LOG_IN_STATUS"}
}
export const CURRENTLY_LOGGED_IN = ()=>{
    return {type:"CURRENTLY_LOGGED_IN"}
}
export const CURRENTLY_LOGGED_USER = (payload)=>{
    return {type:"CURRENTLY_LOGGED_USER",payload}
}
export const SWITCH_USER = (payload)=>{
    return {type:"SWITCH_USER",payload}
}
export const POST = (payload)=>{
    return {type:"POST",payload}
}
export const LIKE = (payload)=>{
    return {type:"LIKE",payload}
}
export const UNLIKE = (payload)=>{
    return {type:"UNLIKE",payload}
}
export const DISLIKE = (payload)=>{
    return {type:"DISLIKE",payload}
}
export const REMOVELIKE = (payload)=>{
    return {type:"REMOVELIKE",payload}
}
export const FRIEND_REQUESTS = (payload)=>{
    return {type:"FRIEND_REQUESTS",payload}
}
export const ACCEPT_REQUEST = (payload)=>{
    return {type:"ACCEPT_REQUEST",payload}
}
export const SIGN_UP = (payload)=>{
    return {type:"SIGN_UP",payload}
}
export const LOGOUT = (payload)=>{
    return {type:"LOGOUT",payload}
}
export const MESSAGE = (payload)=>{
    return {type:"MESSAGE",payload}
}
export const NEW_MESSAGE = (payload)=>{
    return {type:"NEW_MESSAGE",payload}
}
