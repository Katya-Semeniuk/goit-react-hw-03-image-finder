import React, { Component } from "react";
import './ImageGallery.css';
// import PropTypes from 'prop-types';
const BASE_URL = 'https:pixabay.com/api';
const API_KEY = '32332367-6643b5098e6f829f8817b33dd';

class ImageGallery extends Component {

    state = {
        page: 1,
        pictures: [],
        error: null,
    }

 componentDidUpdate(prevProps, prevState) { 
  const prevName = prevProps.name;
  const nextName = this.props.name; 
  const url = `${BASE_URL}/?q=${nextName}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`; 

    if (prevName !== nextName) {
    fetch(url)
      .then(res => res.json())
        .catch(error => this.setState({ error }))
        .then(pictures => this.setState({pictures}));
        // .then(pictures => console.log(pictures))
}
    };
    
    // if (this.state.pictures !== null) {
        //     const { hits } = this.state.pictures;
        //     const searchedPictures = hits;
        // }
    render() {
        const { pictures } = this.state;
        return (
            <ul pictures={pictures} className="gallery">
        </ul>
    )
    }
};


export default ImageGallery;
