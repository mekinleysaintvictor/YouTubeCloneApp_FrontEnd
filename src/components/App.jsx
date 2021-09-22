import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comments from './Comments/Comments';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import VideoTable from './VideoTable/VideoTable';
import Videos from './Videos/Videos';
import SearchBar from './SearchBar/SearchBar';


export default function App() {
    
    const [selectedVideo, setSelectedVideo] = useState('2DVpys50LVE'); //selected video using video id, also requests our videos based on related search, mainly for vidplayer
    const [videos, setVideos] = useState([]); //related videos from our api search 
    const [search, setSearch] = useState(''); //searches through our existing 'box' of videos
    const [filteredVideos, setFilteredVideos] = useState([]); //returns search based on our 'box' of videos


    async function getVideos() {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCrTjQbJJbEpM-hxo52_KwxOt3v0mKGm3U&part=snippet&type=video,contentDetails,statistics,status&q=${search}`);
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

    function userSelectedVideo(video){
        //update state variable selectedVideo
        let videoId = video.id.videoId
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
 
//make get request by search term
//use selectfunction to set first vid in list as vid
//pass into videoplayer
