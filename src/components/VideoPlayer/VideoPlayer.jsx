import axios from "axios";
import React, {useEffect, useState} from "react";
import './VideoPlayer.css'

const VideoPlayer = (props) => {
    //const for current video
    
    //const for proper url to put in src
    console.log('whats props', props.video)
    //contains embedded video player
    return ( 
        <center>
        <div className="container">
                <div>
                    <iframe id="ytplayer" type="text/html" width="640" height="360"
                        src={`https://www.youtube.com/embed/${props.video}/`}
                        frameBorder="0">
                    </iframe>
                </div>
                <div className="card bg-danger text-white">
                <h2 className="text-center">Video Description</h2>
                    <div>{props.description}</div>
                </div>
                
        </div>
        </center>
     );
}
 
export default VideoPlayer;
