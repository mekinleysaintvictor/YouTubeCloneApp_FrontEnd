import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comments from './Comments/Comments';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import VideoTable from './VideoTable/VideoTable';
import Videos from './Videos/Videos';
import SearchBar from './SearchBar/SearchBar';


export default function App() {
    const [videos, setVideos] = useState([]);
    const [filteredVideo, setFilteredVideos] = useState("zeldasport");
    const [selectedVideo, setSelectedVideo] = useState(videos[0]);

    // useEffect(() => {
    //     axios.get(`https://www.googleapis.com/youtube/v3/search?q=${filteredVideo}&key=AIzaSyDFM6QVMnwTGTMFkgjKVdLvVjD6laVtSAI&part=snippet&type=video&maxResults=5/`).
    //     then(response => setVideos(response.data.items))
    // }, []);

    async function getVideos() {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${filteredVideo}&key=AIzaSyDFM6QVMnwTGTMFkgjKVdLvVjD6laVtSAI&part=snippet&type=video&maxResults=5`);
        console.log("API YOUTUBE:", response.data.items);
        setVideos(response.data.items);
    }

    function mapVideos(){
        return videos.map(video =>
        <Videos
            key={video.id}
            video={video}
        />    
        )
    }
    
    useEffect(() => {
        let mounted = true;
        if(mounted){
            getVideos();
        }
        return () => mounted = false;
    }, [])

        return ( 
            <React.Fragment>
            <div>
                <h1>Hello World</h1>
                <SearchBar />
                <VideoPlayer video={videos[0]}/>
                <VideoTable mapVideos={() => mapVideos()} />
                <Comments />
            </div>
            </React.Fragment>  
         );
}
 
