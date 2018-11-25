import React, { Component } from 'react';

class ListView extends Component {

    state = {
        query: '',
        selectedPlaces: []
    }
    
    // Function to filter locations based on user search input
    searchPlace = (query) => {
        if (query) {
            const filteredPlaces = this.props.places.filter((place) => place.name.toLowerCase().includes(query.toLowerCase()));
            this.setState({ selectedPlaces: filteredPlaces });
        }
    }

    updateQuery = (query) => {
        this.setState({ query: query }, () => {
          this.searchPlace(this.state.query); 
        });
    }

  
    render() {
        //const { books } = this.props                 
        console.log(this.state.selectedPlaces)    
        return (
            <div className="sidebar">
                <h2 className="sidebar-title">Points of Interest</h2>
                <div className="locations">
                <input aria-label='Search Filter' className="filter" type='text'
                    placeholder="Search by location"
                    value={this.state.query}
                    onChange={(event) => this.updateQuery(event.target.value)}   
                ></input>
                    <ul className="cc">
                        {this.props.places.map((place, id) => 
                        <li
                            className="location"
                            key={place.id}>
                            {place.name}
                        </li>
                        )}                      
                    </ul>
                </div>
            </div>
        )
    }
}
export default ListView

