import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comments from './Comments/Comments';
import VideoPlayer from './VideoPlayer/VideoPlayer';


export default function App() {
    const [currentVideos, setCurrentVideos] = useState();

    useEffect(() => {
        getVideos();
    }, []);

    async function getVideos() {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyCrTjQbJJbEpM-hxo52_KwxOt3v0mKGm3U&part=snippet&type=video&maxResults=5');
        console.log("API YOUTUBE:", response.data);
        setCurrentVideos(response.data);
    }

        return ( 
            <div>
                <h1>Hello World</h1>
                <VideoPlayer/>
                <Comments/>
            </div>
         );
}
 
