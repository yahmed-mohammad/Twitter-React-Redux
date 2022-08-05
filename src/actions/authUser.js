export const SET_AUTH_USER = "SET_AUTH_USER";

/**
 * 
 * @param  id 
 * @returns action
 * This is a action creator
 */
export function setAuthUser(id) {
    return {
        type: SET_AUTH_USER,
        id
    }
}