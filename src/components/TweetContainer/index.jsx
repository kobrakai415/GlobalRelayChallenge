import React, { useEffect } from 'react';
import './styles.css'
import { format } from 'date-fns'

const TweetContainer = ({ tweet }) => {

    useEffect(() => {

        return () => {

        };
    }, []);

    return (
        <div className="tweet-container">
            <div className="d-flex">

                <img height="55px" src={tweet.user.profile_image_url_https} />
                <div className="ms-2" style={{width: "100%"}}>

                    <div  className="d-flex justify-content-between">
                        <div className="d-flex">
                            <h6 className="me-2" >{tweet.user.name}</h6>
                            <span>@{tweet.user.screen_name}</span>
                        </div>
                        <span>{format(new Date(tweet.created_at), "PP")}</span>
                    </div>
                    <p>
                        {tweet.text}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TweetContainer;
