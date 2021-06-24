import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import CreateTweet from './Tweet';

export default function TweetList() {
    const { userId } = useParams();
    const [tweets, setTweets] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const savedTweets = JSON.parse(localStorage.getItem("tweets"));
        setTweets(savedTweets);
    }, [userId])

    useEffect(() => {
        const pullInterval = 1000;
        let timerId;

        const refreshTweets = () => {
            timerId = setTimeout(() => {
                const savedTweets = JSON.parse(localStorage.getItem("tweets"));
                setTweets(savedTweets);
                timerId = setTimeout(refreshTweets, pullInterval)
            }, pullInterval);
        }

        refreshTweets();

        return () => {
            if (timerId) {
                clearTimeout(timerId);
            }
        }
    }, [])

    const addTweet = (tweet) => {
        const newTweets = [...tweets, { ...tweet, userId }];
        setTweets(newTweets);
        localStorage.setItem("tweets", JSON.stringify(newTweets));
    }

    const isMyTweet = (tweet) => {
        return tweet.userId === userId;
    }

    return <div>
        <button onClick={() => { history.push('/') }}>Stop</button>
        <CreateTweet addTweet={addTweet} />
        {tweets.map(tweet => <div id={Math.random() * 1000}>
            <div style={{ color: isMyTweet(tweet) ? 'green' : 'red' }}>
                {`${tweet.userId}: "${tweet.text}"`}
            </div>
        </div>)}
    </div>
}