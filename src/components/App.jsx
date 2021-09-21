import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comments from './Comments/Comments';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import VideoTable from './VideoTable/VideoTable';
import Videos from './Videos/Videos';
import SearchBar from './SearchBar/SearchBar';


export default function App() {
    
    const [selectedVideo, setSelectedVideo] = useState('2DVpys50LVE');
    const [videos, setVideos] = useState([]); //related videos
    const [search, setSearch] = useState('');
    const [filteredVideos, setFilteredVideos] = useState([]);


    async function getVideos() {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCrTjQbJJbEpM-hxo52_KwxOt3v0mKGm3U&part=snippet&type=video,contentDetails,statistics,status&maxResults=5&relatedToVideoId=${selectedVideo}`);
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

    function userSelectedVideo(videoId){
        //update state variable selectedVideo
        // const videoId = video.id.videoId
        setSelectedVideo(videoId);
    }
    
    useEffect(() => {
        setFilteredVideos(
            videos.filter(video => {
                return video.snippet.title.toLowerCase().includes(search.toLocaleLowerCase())
            })
        )
    }, [search, videos])

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
                <SearchBar handleChange={(event) => setSearch(event.target.value)} />
                <VideoPlayer video={selectedVideo} />
                <VideoTable videos = {filteredVideos} />
                <Comments/>
            </div>
            </React.Fragment>  
         );
}
 
