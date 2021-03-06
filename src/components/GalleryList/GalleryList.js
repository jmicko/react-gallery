// imports
import React, { Component } from 'react';
import './GalleryList.css';
import GalleryItems from '../GalleryItems/GalleryItems';


// class
class GalleryList extends Component {
    render() {
        console.log(this.props.gallery);
        return (
            <div>
                <div className="container">
                    {this.props.gallery.map(image =>
                        <GalleryItems
                        key={image.id}
                        image={image}
                        // passed through from app because it needs access to the App props
                        getAllPictures={this.props.getAllPictures}
                        />
                    )}
                </div>
            </div>
        ); // end return
    } // end render
} // end class

// export
export default GalleryList;