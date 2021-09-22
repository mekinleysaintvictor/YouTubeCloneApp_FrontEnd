import React, {useEffect, useState} from "react";

const Videos = (props) => {
    return ( 
        <div>
            <tr>
                <td>{props.video.snippet.title}</td>
            </tr>
        </div>
    );
}
 
export default Videos;