import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comments from './Comments/Comments';
import SearchBar from './SearchBar/SearchBar';


export default function App() {
    const [videoCommentsFromApi, setVideoCommentsFromApi ] = useState([])                                               

    useEffect(() => {
        getAllComments();
    },[]);

    async function getAllComments() {
        let response = await axios.get('http://127.0.0.1:8000/video/');
        console.log(response.data[0].comment);
        console.log(response.data);
        setVideoCommentsFromApi(response.data)
    }



        return ( 
            <React.Fragment>
                <SearchBar />
                <div>
                    <h1>Hello World</h1>
                    <div>
                        {console.log("State data: ", videoCommentsFromApi)}
                        {videoCommentsFromApi.map((video, index) => {
                            return(
                            <h1 key={index}>{video.comment}</h1>
                            )
                        })}
                    </div>
                </div>
            </React.Fragment>
         );
}
 
