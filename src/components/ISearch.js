import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import imagelist from './imageList';
import ImageList from './imageList';




    class ISearch extends React.Component{
        state = { images:[] };

    onSearchSubmit=async(term)=>{
      
       const response = await unsplash.get('/search/photos',{
           params:{
             query: term
           }
        });

        this.setState({images: response.data.results});
   }
   
   render(){   
        return ( 
        <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmitForm ={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        < ImageList images={this.state.images} />
       </div>
    )
    }

};


export {ISearch as default};