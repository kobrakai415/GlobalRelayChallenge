import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import SavedTweetContainer from '../SavedTweetContainer';

const SavedTweetsSection = ({ draggedTweet }) => {
    const [savedTweets, setSavedTweets] = useState([])


    useEffect(() => {
        const tweets = JSON.parse(localStorage.getItem("savedTweets"))
        console.log(tweets)
        if (tweets !== null) setSavedTweets(tweets)
        console.log(tweets)

    }, []);

    const handleDrop = (e) => {
        e.preventDefault()
        console.log("dropped")
        console.log(e)
        const tweets = [...savedTweets, draggedTweet]
        setSavedTweets(tweets)
        localStorage.setItem("savedTweets", JSON.stringify(tweets))
    }

    const deleteFromSavedTweets = (id) => {
        const tweets = savedTweets.filter((tweet) => tweet.id !== id)

        setSavedTweets(tweets)
        localStorage.setItem("savedTweets", JSON.stringify(tweets))
    }

    return (
        <Col md={6}>

            <div onDragOver={(e) => { console.log(e); e.preventDefault() }} onDrop={(e) => handleDrop(e)} className="saved-tweets-section">
                <h3>Saved Tweets</h3>
                <div id="saved-tweets" className="mt-3">
                    {
                        savedTweets && savedTweets.length > 0 ?
                            savedTweets.map((tweet, index) => <SavedTweetContainer key={index} tweet={tweet} deleteTweet={deleteFromSavedTweets} />)
                            : null
                    }
                </div>

            </div>



        </Col>
    );
}

export default SavedTweetsSection;
