import { connect } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";
import { TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti';
import { handleToggleLike } from "../actions/tweets";

const Tweet = (props) => {
    if(props.tweet === null) {
        return <p>This tweet does not exist</p>;
    }

    const toParent = (e, id) => {
        e.preventDefault();
        //TODO:
    }
    const handleLike = (e) => {
        e.preventDefault();

        const {dispatch, tweet, authUser} = props;
        dispatch(handleToggleLike({
            id: tweet.id,
            hasLiked: tweet.hasLiked,
            authUser
        }))
    }

    const {name, avatar, timestamp, text, hasLiked, likes, replies, parent} = props.tweet;
    return (
        <div className="tweet">
            <img src={avatar} alt={`Avatar of ${name}`} className="avatar"/>
            <div className="tweet-info">
                <div>
                    <span>{name}</span>
                    <div>{formatDate(timestamp)}</div>
                    {
                        parent && (
                            <button className="replying-to" onClick={(e) => toParent(e, parent.id)}>
                                Replying to @{parent.author}
                            </button>
                        )
                    }
                    <p>{text}</p>
                    <div className="tweet-icons">
                        <TiArrowBackOutline className="tweet-icon"/>
                        <span>{replies !== 0 && replies}</span>
                        <button className="heart-button" onClick={handleLike}>
                            {
                                hasLiked === true ? (
                                    <TiHeartFullOutline color="e0245e" className="tweet-icon"/>
                                ) : (
                                    <TiHeartOutline className="tweet-icon"/>
                                )
                            }
                        </button>
                        <span>{likes !== 0 && likes}</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
};

const mapStateToProps = ({authUser, users, tweets}, {id}) => {
    const tweet = tweets[id];
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

    return {
        authUser,
        tweet: tweet ? formatTweet(tweet, users[tweet.author], authUser, parentTweet): null,
    };
};

export default connect(mapStateToProps)(Tweet);