import React from "react";

const VideoTable = (props) => {
    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>Video Title: </th>
                </tr>
            </thead>
            {props.mapVideos()}
        </table>
     );
}
 
export default VideoTable;