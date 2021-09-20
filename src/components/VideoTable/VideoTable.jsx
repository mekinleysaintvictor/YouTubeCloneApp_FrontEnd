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
                    <tr key={item.id.videoId} className="container">
                        <td>{item.snippet.title}</td>  
                    </tr>
                ))}
            </tbody>
        </table>
     );
}
 
export default VideoTable;