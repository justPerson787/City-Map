import React, { Component } from 'react';

class ListView extends Component {
    
    render() {
        //const { books } = this.props                 
            
        return (
            <div className="sidebar">
                <h2 className="sidebar-title">Points  of Interest</h2>
                <div className="locations">
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

