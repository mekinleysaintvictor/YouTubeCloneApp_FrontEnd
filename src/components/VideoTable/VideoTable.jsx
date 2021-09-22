import React from "react";
import './VideoTable.css'

const VideoTable = (props) => {
    return ( 
        <center>
        <table >
            <thead>
                <th>Videos</th>
            </thead>
            <tbody>
                {props.videos.map((item =>
                    <tr key={item.id.videoId} >
                        <td>{item.snippet.title}</td>
                        <td onClick={props.userSelectedVideo(item.id.videoId)}><img src={item.snippet.thumbnails.default.url}></img></td>
                        <td onClick={props.userSelectedVideoDesc(item.snippet.description)}></td>   
                    </tr>
                ))}
            </tbody>
        </table>
        </center>
    );
}
 
export default VideoTable;