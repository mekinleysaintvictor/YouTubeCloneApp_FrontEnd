import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comments from './Comments/Comments';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import VideoTable from './VideoTable/VideoTable';
import Videos from './Videos/Videos';
import SearchBar from './SearchBar/SearchBar';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
    
    const [selectedVideo, setSelectedVideo] = useState('2DVpys50LVE');
    const [videos, setVideos] = useState([]); //related videos
    const [search, setSearch] = useState('lofi');
    const [filteredVideos, setFilteredVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [selectVideo, setSelectVideo] = useState([])
    const [selectDescription, setSelectDescription] = useState([])


    async function getVideos() {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCrTjQbJJbEpM-hxo52_KwxOt3v0mKGm3U&part=snippet&type=video,contentDetails,statistics,status&q=${search}`);
        console.log("API YOUTUBE:", response.data.items);
        setVideos(response.data.items);
    }
    

    function userSelectedVideo(videoId){
        console.log('videoId', videoId)
        let clickedVideo = videoId;
        console.log('selected video', clickedVideo);
        setSelectVideo(clickedVideo);
        // udpdate state variable selectedVideo
    }

    function userSelectedVideoDesc (video) {
        let clickedDescription = video;
        setSelectDescription(clickedDescription);

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
                <Container>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <SearchBar handleChange={(event) => setSearch(event.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center">
                            <VideoPlayer video={selectVideo} description={selectDescription}/>
                        </div>
                        <div className="container col-sm-4">
                            <VideoTable videos = {filteredVideos} userSelectedVideo={userSelectedVideo} userSelectedVideoDesc={userSelectedVideoDesc}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">    
                            <Comments video={selectVideo}/>  
                        </div>
                    </div>
                </div> 
                </Container>
            </React.Fragment>  
         );
}
 
//make get request by search term
//use selectfunction to set first vid in list as vid
//pass into videoplayer
