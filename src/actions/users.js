export const RECEIVE_USERS = "RECEIVE_USERS";

/**
 * 
 * @param users 
 * @returns action
 * This is a action creator function
 */
export function receiveUsers(users) {
    return{
        type: RECEIVE_USERS,
        users
    }
}