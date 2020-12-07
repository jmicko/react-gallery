// imports
import React, { Component } from 'react';
import axios from 'axios';
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

    like = () => {
        axios.put(`/gallery/like/${this.props.image.id}`)
            .then((response) => {
                console.log('Response:', response);
                // passed through from app because it needs access to the App props
                this.props.getAllPictures();
            })
            .catch((error) => {
                alert('Something bad happened');
                console.log('error', error);
            })
    }


    render() {
        return (
            <div>
                <div className="image" onClick={this.clickImage}>
                    {
                        this.state.swap
                            ? <p>{this.props.image.description}</p>
                            : <img src={this.props.image.path} alt="hey"></img>
                    }
                </div>
                <div>

                    <p>
                        {
                            // nested ternary because I can
                            (this.props.image.likes === 0)
                                ? 'No one likes this image!'
                                : (this.props.image.likes === 1)
                                    ? '1 person likes this image!'
                                    : `${this.props.image.likes} people like this image`
                        }
                    </p>
                    <button onClick={this.like} >Like!</button>
                </div>
            </div>
        ) // end return
    } // end render
} // end class

// export
export default GalleryItems;