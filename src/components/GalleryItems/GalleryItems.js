// imports
import React, { Component } from 'react';
import './GalleryItems.css'

// class
class GalleryItems extends Component {

    state = {
        swap: false
    }

    clickImage = () => {
        this.setState({
            swap: !this.state.swap
        })
    }


    render() {
        return (
            <div>
                <div className="image" onClick={this.clickImage}>
                    {this.state.swap ?
                        <p>{this.props.image.description}</p> :
                        <img src={this.props.image.path} alt="hey"></img>
                    }
                </div>
            </div>
        ) // end return
    } // end render
} // end class

// export
export default GalleryItems;