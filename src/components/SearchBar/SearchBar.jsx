import React, { useState } from 'react';

const SearchBar = (props) => {
    // const [videos, setVideos] = useState([]);
    // const [filteredVideo, setFilteredVideos] = useState("lofi hip hop");
    // useEffect(() => {
    //     getVideos();
    // }, []);

    // async function getVideos() {
    //     let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${filteredVideo}&key=AIzaSyCrTjQbJJbEpM-hxo52_KwxOt3v0mKGm3U&part=snippet&type=video&maxResults=5`);
    //     console.log("API YOUTUBE:", response.data.items);
    //     setVideos(response.data.items);
    // }

    return (
        <div className="input-group">
            <input type="search" className="form-control rounded" placeholder="Search..." aria-label="Search"
                aria-describedby="search-addon" />
            <button type="button" className="btn btn-outline-primary">search</button>
        </div>
    )
}
export default SearchBar