import { RECEIVE_TWEETS, TOGGLE_LIKE } from "../actions/tweets";

export default function users(state={}, action) {
    switch(action.type) {
        case RECEIVE_TWEETS:
            return {
                ...state,
                ...action.tweets
            }
        case TOGGLE_LIKE:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    likes: action.hasLiked === true ? 
                        state[action.id].likes.filter((uid) => (uid !== action.authUser)) :
                        state[action.id].likes.concat(action.authUser)
                }
            }
        default:
            return state
    }
}