import React from 'react';
import YSearchBar from './YSearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class Tube extends React.Component {


state ={videos:[],selectedVideo:null};

componentDidMount(){
    const vid = "Falcon amnd winter solider";
    this.onTermSubmit(vid);
}


    onTermSubmit = async (term)=>{

       
     const response =  await  youtube.get('/search',
        {
            params:{
                q: term
            }
        
        
        });

        console.log(response);
        
        this.setState({videos: response.data.items});

    };



    onVideoSelect = (video)=>{

        this.setState({selectedVideo:video});
        console.log('From the app',video);
    }

    render(){

        return (

             <div className="ui container"> 
                 <YSearchBar onTermSubmit={this.onTermSubmit}/>
                 There are {this.state.videos.length} videos matching your search result ..
                 <div className="ui grid"> 
                 <div className="ui row">
                     <div className="eleven wide column">
                 <VideoDetail video={this.state.selectedVideo} />
                 </div>
                 <div className="five wide column">
                  <VideoList onVideoSelect ={this.onVideoSelect}  videos={this.state.videos}/>
                  </div>
                  </div>
                  </div>

                  </div>
        )
    }
}

export default Tube ;