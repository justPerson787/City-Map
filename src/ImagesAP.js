import React, { Component } from 'react';

const url1=`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8f644b7e22cbee096c063b29029ff424&tags=Newport_Aquarium&privacy_filter=1&per_page=1&page=1&format=json&nojsoncallback=1`
const url2=`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8f644b7e22cbee096c063b29029ff424&tags=Cincinnati+Zoo+%26+Botanical+Garden&privacy_filter=1&per_page=1&page=1&format=json&nojsoncallback=1`
const urlpart1 = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8f644b7e22cbee096c063b29029ff424&tags=`
const urlpart2= `&privacy_filter=1&per_page=1&page=1&format=json&nojsoncallback=1`


class ImagesAP extends Component {
    constructor(){
      super();
      this.state = {
        pictures: [],
      };
    }
  
    //getData(url) is somewhat modified code provided at //https://www.youtube.com/watch?v=RkXotG7YUek

    getData(url){
        fetch(url)
        .then(function(response){
          return response.json();
        })
        .then(function(j){        
          let picArray = j.photos.photo.map((pic) => {
            
            var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'_m.jpg';
            return(
              <img alt={this.props.name2} src={srcPath} key={pic.id}></img>
            )
          })
          this.setState({pictures: picArray});
        }.bind(this))
      }
    
    componentDidMount(){        
        this.getData(urlpart1+this.props.name2+urlpart2);
      }

    render() {
        //this.getData(this.props.url); 
      return (
        <div className="forModal">          
          <p>
            {this.state.pictures}
          </p>
          
        </div>
      );
    }
  }
  
export default ImagesAP