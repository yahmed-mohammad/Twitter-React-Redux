export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

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