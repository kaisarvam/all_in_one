import React from 'react';

class YSearchBar extends React.Component {

    state = {term: ''};

    onInputChange=(event)=>{

    this.setState({term: event.target.value });

    

    };


    onFromSubmit = (event)=>{
    
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
    
    }

    render(){

        return (
            <div className="search-bar ui segment"> 

              <form className="ui form" onSubmit={this.onFromSubmit}>
                <div className="field">
                    <label>
                        Video search
                    </label>
                    <input 
                    type="text" placeholder="please enter here"  
                    value = {this.state.term} 
                    onChange={this.onInputChange} >
                    </input>

                </div> 

              </form>
                
            </div>
        );
    }
}

export default YSearchBar ;