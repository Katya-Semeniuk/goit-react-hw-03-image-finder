import React from "react";
import './ImageGalleryItem.css';
// import PropTypes from 'prop-types';


const ImageGalleryItem = ({webformatURL}) => { 
        return (
            <li className="gallery_item">  
            <img src={webformatURL} alt="" />
        </li>
    )  
    };

export default ImageGalleryItem;