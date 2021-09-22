import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Comments = (props) => {
    const [videoCommentsFromApi, setVideoCommentsFromApi ] = useState([])

    useEffect(() => {
        getAllComments();
    },[]);

    async function getAllComments() {
        let response = await axios.get('http://127.0.0.1:8000/video/');
        console.log(response.data);
        setVideoCommentsFromApi(response.data)
    }

    return ( 
        <div>
            {props.video}
            {console.log("State data: ", videoCommentsFromApi)}
                {videoCommentsFromApi.map((video, index) => {
                    return(
                        <p key={index}>{video.comment}</p>
                    )
                })}
                <input type="text" placeholder="comment here..."></input>
        </div>
     );
}
 
export default Comments;

{/* <div>
<h1>Hello World</h1>
<div>
    {console.log("State data: ", videoCommentsFromApi)}
    {videoCommentsFromApi.map((video, index) => {
        return(
        <h1 key={index}>{video.comment}</h1>
        )
    })}
</div>
</div> */}