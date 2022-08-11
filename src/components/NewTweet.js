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
    return (
        <div>
            New Tweet
        </div>
    )
})