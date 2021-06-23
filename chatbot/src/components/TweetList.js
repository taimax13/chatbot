import React, {useState} from "react";
import CreateTweet from './Tweet';

export default function TweetList({ userId }){
    const [tweets, setTweets] = useState([]);

    const addTweet = (tweet) => {
        const newTweets = [...tweets, tweet];
        setTweets(newTweets);
    }

    return <div>
        <CreateTweet addTweet={addTweet} />
        {tweets.map(tweet => <div>{tweet.text}</div>)}    
    </div>
}