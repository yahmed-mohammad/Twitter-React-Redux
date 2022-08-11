import { saveLikeToggle, saveTweet } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_LIKE = "TOGGLE_LIKE";
export const ADD_TWEET = "ADD_TWEET";

export function addTweet(tweet) {
    return {
        type: ADD_TWEET,
        tweet
    }
}

export function handleAddTweet(text, replyingTo) {
    return (dispatch, getState) => {
        const {authUser} = getState();

        dispatch(showLoading());
        return saveTweet({
            text,
            author: authUser,
            replyingTo
        })
        .then((tweet) => dispatch(addTweet(tweet))
        .then(() => dispatch(hideLoading())));
    }
}

/**
 * 
 * @param tweets 
 * @returns action
 * This is a action creator function
 */
export function receiveTweets(tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}
/**
 * 
 * @param {*} param0 
 * @returns 
 * Action creator for Like
 */
export function toggleLike ({id, authUser, hasLiked}) {
    return {
        type: TOGGLE_LIKE,
        id,
        authUser,
        hasLiked
    }
}

export function handleToggleLike(info) {
    return (dispatch) => {
        dispatch(toggleLike(info));
        saveLikeToggle(info).catch((e) => {
            console.log("Error in handleToggleLike", e);
            dispatch(toggleLike(info));
            alert("Please try again.");
        })
    }
}