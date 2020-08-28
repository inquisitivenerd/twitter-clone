import React from 'react'
import "./Widgets.css";
import {
    TwitterTimeLineEmbed,
    TwitterShareButton, 
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className = "widgets">
            <div className = "widgets__input">
                <SearchIcon className = "widgets__searchIcon" />
                <input placeholder ="Search Twitter" type = "text" />
            </div>

            <div className = "widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId = {"1294587074486534145"}></TwitterTweetEmbed>

                {/* <TwitterTimeLineEmbed
                    sourceType="profile" 
                    screenName="CallMe_Mohammed" 
                    options={{ height: 400 }}
                    /> */}

                <TwitterShareButton 
                url = {"https://www.facebook.com/easports/videos/10155756909994288"}
                options = {{ text: "#reactjs is awesome", via: "Mohammed Ali Khan" }}
                />
            </div>
        </div>
    )
}

export default Widgets
