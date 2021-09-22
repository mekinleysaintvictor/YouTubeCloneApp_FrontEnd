import React from "react";
import './VideoTable.css'

const VideoTable = (props) => {
    return ( 
        <table>
            <thead>
                <th>Videos</th>
            </thead>
            <tbody>
                {props.videos.map((item =>
                    <tr key={item.id.videoId} className="container" onClick={item.id.videoId}>
                        <td>{item.snippet.title}</td>
                        <td><img src={item.snippet.thumbnails.default.url}></img></td>
                        <td>{item.snippet.description}</td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
     );
}
 
export default VideoTable;