import React from "react";
import FeedItem from "./FeedItem";

const Feed = ({ tweets }) => {
    return(
        <div>
            {
                tweets.map((tweets, index) => (
                    <FeedItem {...tweets} key={index} />
                )) 
            }
        </div>
    )
}

export default Feed;