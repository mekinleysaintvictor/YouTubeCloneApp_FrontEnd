import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comments from './Comments/Comments';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import VideoTable from './VideoTable/VideoTable';
import Videos from './Videos/Videos';
import SearchBar from './SearchBar/SearchBar';


export default function App() {
    const [videos, setVideos] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredVideos, setFilteredVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    async function getVideos() {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=lofi+hiphop&key=AIzaSyDFM6QVMnwTGTMFkgjKVdLvVjD6laVtSAI&part=snippet&type=video&maxResults=5');
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
        setFilteredVideos(
            videos.filter(video => {
                return video.snippet.title.toLowerCase().includes(search.toLocaleLowerCase())
            })
        )
    })

    useEffect(() => {
        let mounted = true;
        if(mounted){
            getVideos();
        }
        return () => mounted = false;
    }, [search, videos])

        return ( 
            <div>
                <h1>Hello World</h1>
                <SearchBar handleChange={(event) => setSearch(event.target.value)}/>
                <VideoPlayer/>
                <VideoTable videos = {filteredVideos} />
                <Comments/>
            </div>
         );
}
 
