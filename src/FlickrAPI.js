/*function JavaScriptFetch() {
    var script = document.createElement('script');
    script.src = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + document.getElementById("search").value;;
    document.querySelector('head').appendChild(script);
    }   
function jsonFlickrFeed(data) {
var image = "";
data.items.forEach(function (element) {
image += "<img src=\"" + element.media.m + "\"/>";
});
document.getElementById("outputDiv").innerHTML = image;
}

import * as FourSquareAPI from './APIs/FourSquare';*/

fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=005703185709cdaa82d65ba99021ec5b&tags=Cincinnati+Zoo+%26+Botanical+Garden&privacy_filter=1&per_page=1&page=1&format=json&nojsoncallback=1')
    .then(function(response){
      return response.json();
    })
    .then(function(j){
      alert(JSON.stringify(j));
        var srcPath = 'https://farm'+j.photos.photo.farm+'.staticflickr.com/'+j.photos.photo.server+'/'+j.photos.photo.id+'_'+j.photos.photo.secret+'.jpg';
        return(
          <img alt="dogs" src={srcPath}></img>
        )
      })

 