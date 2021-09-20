import axios from "axios";
import React, {useEffect, useState} from "react";

const VideoPlayer = (props) => {
    //currentVideo is the state that holds the state data
    //setCurrent will be the function that updates currentVideo
    const [currentVideo, setCurrentVideo] = useState();

    useEffect(() => { 
        getVideo();
    }, []); //a placeholder for our useEffect

    async function getVideo() {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/videos?id=VToyayJ4u2k&key=AIzaSyCrTjQbJJbEpM-hxo52_KwxOt3v0mKGm3U&part=snippet&type=video&maxResults=5');
        setCurrentVideo(response.data);
    }


    //contains embedded video player
    return ( 
        <div className="videoPlayer">
                <div>
                    <iframe id="ytplayer" type="text/html" width="640" height="360"
                        src="https://www.youtube.com/embed/VToyayJ4u2k"
                        frameborder="0">
                    </iframe>
                </div>
        </div>
     );
}
 
export default VideoPlayer;
