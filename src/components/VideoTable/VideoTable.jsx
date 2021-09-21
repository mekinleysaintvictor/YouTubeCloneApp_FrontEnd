import React from "react";
import './VideoTable.css'

const VideoTable = (props) => {
    return ( 
        <table>
            <thead>
                <th>Vidoes</th>
            </thead>
            <tbody>
                {props.videos.map((item =>
                    <tr key={item.id.videoId} className="container" >
                        <td>{item.snippet.title}</td>
                        <td onClick={props.userSelectedVideo(item.id.videoId)}><img src={item.snippet.thumbnails.default.url}></img></td>
                        
                        
                    </tr>
                ))}
            </tbody>
        </table>
     );
}
 
export default VideoTable;