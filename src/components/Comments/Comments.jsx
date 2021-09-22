import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Comments = (props) => {
    const [videoCommentsFromApi, setVideoCommentsFromApi ] = useState([])
    const [videoComment, setVideoComment] = useState([])

    useEffect(() => {
        getAllComments();
        postComment();
    },[]);

    async function getAllComments() {
        let response = await axios.get('http://127.0.0.1:8000/video/');
        console.log(response.data);
        setVideoCommentsFromApi(response.data)
    }

    function postComment () {
        axios.post('http://127.0.0.1:8000/video/');
        
        
    }

    return ( 
        <div>
            {props.video}
            {console.log("State data: ", videoCommentsFromApi)}
                {videoCommentsFromApi.map((video, index) => {
                    return(
                        <><><p key={index}>{video.comment}</p><input type="text" placeholder="reply..."></input></><button type="submit">Submit Reply</button></>
                    )
                })}
                <div>
                    <input type="text" placeholder="comment here..."></input><button type="submit">Submit Comment</button>
                </div>
               
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