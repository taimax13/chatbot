import React, {useState} from 'react'

const maxTweetLength = 140;

export default function CreateTweet({ addTweet }) {
    const [text, setText] = useState("");

    const inputHandler = e => {
        const newText = e.target.value;

        const validText = newText.slice(0, maxTweetLength);
        setText(validText); 
    }

    const createTweet = () => {
        addTweet({ text });
    }


    return (<div><textarea className="tweettext" value={text} placeholder="what you have in mind" onChange={inputHandler}>
        
    </textarea><button className="tweetbtn" onClick={createTweet} >Tweet</button></div>);
}


