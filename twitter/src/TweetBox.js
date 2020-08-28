import React, {useState} from 'react'
import "./TweetBox.css";
import { Avatar,  Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    
    const sendTweet = e => {
        e.preventDefault();
        
        db.collection('posts').add({
            displayName: "Hassan Ali",
            username: "awesomehassan22",
            verified: false,
            text: tweetMessage, 
            image : tweetImage,
            avatar: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        });

        setTweetMessage("");
        setTweetImage("");
    };


    return (
        <div className = "tweetBox">    
            <form>
                <div className = "tweetBox__input">
                    <Avatar src = "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2019/03/avatar-publicity_still-h_2019.jpg"></Avatar>
                    <input
                    onChange = {(e) => setTweetMessage(e.target.value)}
                    value = {tweetMessage} placeholder= "What is happening?" type= "text"></input>
                </div>
                <input
                value = {tweetImage}
                onChange = { e => setTweetImage(e.target.value)}
                className = "tweetBox__imageInput" placeholder = "Enter image URL" type = "text"></input>
                <Button onClick = {sendTweet}  type = "submit" className = "tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
