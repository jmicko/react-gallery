// imports
import React, { Component } from 'react';
import './GalleryList.css';

// class
class GalleryList extends Component {
    render() {
        console.log(this.props.gallery);
        return (
            <div>
                <h2>hello from GalleryList component</h2>
                {this.props.gallery.map(image => 
                    <img src={image.path} alt="hey"></img>
                    )}
            </div>
        ); // end return
    } // end render
} // end class

// export
export default GalleryList;