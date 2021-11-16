import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import TweetContainer from '../TweetContainer';
import './styles.css'

const SearchSection = ({ setDraggedTweet }) => {

    const [query, setQuery] = useState("");
    const [tweets, setTweets] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const debouncedQuery = useDebounce(query, 1000)

    useEffect(() => {
        searchTweets()
    }, [debouncedQuery])

    const searchTweets = async () => {
        try {
            setTweets([])
            setLoading(true)
            const response = await fetch(`https://git.heroku.com/global-relay-server.git/search/${debouncedQuery.length > 0 ? debouncedQuery : "apple"}`)

            if (response.status === 200) {
                const data = await response.json()
                console.log(data)
                setLoading(false)
                setTweets(data)
            } else {
                setLoading(false)
                setError(true)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(true)

        }
    }

    return (
        <Col md={6}>

            <div className="search-section position-relative h-100">

                <div id="search-bar-parent">
                    <input id="search-bar" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Find a tweet ... " />
                    <svg className="search-bar-glass" viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="currentcolor"></path>
                    </svg>
                </div>


                <div className="search-result-tweets h-100">

                    {tweets.length > 0 && !loading ?
                        tweets.map(tweet => <TweetContainer key={tweet.id} tweet={tweet} setDraggedTweet={setDraggedTweet} />)
                        : null
                    }

                </div>

                {loading ? <img className="centered" src="/spinner.svg" height={250} width={250} alt="loader" /> : null}

                {error ? <h3 className="centered">An error has occured, please try again!</h3> : null}
                {query.length > 0 && tweets.length === 0 && !loading ? <h3 className="centered">No tweets found, please try another search term!</h3> : null}
            </div>
        </Col>
    );
}

function useDebounce(value, delay) {

    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(
        () => {
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);

            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay]
    );

    return debouncedValue;
}


export default SearchSection;
