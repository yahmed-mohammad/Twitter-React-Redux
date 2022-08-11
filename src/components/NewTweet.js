import { useState } from "react";


export const NewTweet = (() => {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        const text = e.target.value;

        setText(text);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //ADD TWEET TO STORE
        // TODO:
        console.log("NEW TWEET: ", text);
        setText("");
    };
    const tweetLeft = 280 - text.length;
    return (
        <div>
            <h3 className="center">Compose New Tweet</h3>
            <form className="new-tweet" onSubmit={handleSubmit}>
                <textarea placeholder="Whats happening?" 
                        value={text} 
                        onChange={handleChange} 
                        className="textarea" 
                        maxLength="280"/>
                {tweetLeft <=100 && <div className="tweet-length">{tweetLeft}</div>}
                <button className="btn" type="submit" disabled={text === ""}>
                    Submit
                </button>
            </form>
        </div>
    )
})