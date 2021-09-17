import React from 'react';

const Comments = (props) => {
    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>Comment</th>
                </tr>
            </thead>
        </table>
     );
}
 
export default Comments;

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