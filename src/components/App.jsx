import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comments from './Comments/Comments';
import SearchBar from './SearchBar/SearchBar';


export default function App() {
    // const [videoCommentsFromApi, setVideoCommentsFromApi ] = useState([]) 
    const [videoList, setVideoList] = useState([])                                              

    useEffect(() => {
        // getAllComments();
        getVideos();
    },[]);

    // async function getAllComments() {
    //     let response = await axios.get('http://127.0.0.1:8000/video/');
    //     console.log(response.data[0].comment);
    //     console.log(response.data);
    //     setVideoCommentsFromApi(response.data)
    // }

    async function getVideos() {
        let response = await axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyDFM6QVMnwTGTMFkgjKVdLvVjD6laVtSAI');
        console.log(response.data);
        setVideoList(response.data);
    }


        return ( 
            <React.Fragment>
                <SearchBar />
                <div>
                    <h1>Hello World</h1>
                    <div>
                        {console.log("State data: ", videoList)}
                        {videoList.map((video, index) => {
                            return(
                            <h1 key={index}>{video.id}</h1>
                            )
                        })}
                    </div>
                </div>
            </React.Fragment>
         );
}
 
