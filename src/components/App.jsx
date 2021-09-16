import React, { Component } from 'react';
import axios from 'axios';
import Comments from './Comments/Comments';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos: [],
            videoCommentsFromAPI: []
         }
    }

    componentDidMount(){
        this.getAllComments();
    }

    async getAllComments(){
        let response = await axios.get('http://127.0.0.1:8000/video/');
        console.log(response.data[0].comment);
        console.log(response.data);
        this.setState({
            videoCommentsFromApI: response.data
        })
    }



    render() { 
        return ( 
            <div>
                <h1>Hello World</h1>
                <div>
                    {this.state.videoCommentsFromAPI.map((video) => {
                        return(
                         <h1>{video.comment}</h1>
                        )
                    })}
                </div>
            </div>
         );
    }
}
 
export default App;