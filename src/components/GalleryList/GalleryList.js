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
                <h2>hello from GalleryList component</h2>
                <div className="container">
                    {this.props.gallery.map(image =>
                        <GalleryItems
                            key={image.id}
                            image={image}
                            getAllPictures={this.props.getAllPictures}
                        // like={this.props.like}
                        />
                    )}
                </div>
            </div>
        ); // end return
    } // end render
} // end class

// export
export default GalleryList;