import axios from "axios";
import React, {useEffect, useState} from "react";

const VideoPlayer = (props) => {
    //const for current video
    
    //const for proper url to put in src
    console.log('whats props', props.video)
    //contains embedded video player
    return ( 
        <div className="videoPlayer">
                <div>
                    <iframe id="ytplayer" type="text/html" width="640" height="360"
                        src={`https://www.youtube.com/embed/${props.video}/`}
                        frameBorder="0">
                    </iframe>
                </div>
                <h2>Video Description</h2>
                    <div>{props.description}</div>
                
        </div>
     );
}
 
export default VideoPlayer;
