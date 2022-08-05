import { connect } from "react-redux";
import { formatTweet } from "../utils/helpers";

const Tweet = (props) => {
    if(props.tweet === null) {
        return <p>This tweet does not exist</p>;
    }
    console.log(props);
    return (
        <div className="tweet">

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