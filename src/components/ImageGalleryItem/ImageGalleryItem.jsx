import React from "react";
import './ImageGalleryItem.css';
// import PropTypes from 'prop-types';


const ImageGalleryItem = ({ hits }) => { 
        return(
            <li className="gallery_item">
                {hits.map(({ id, webformatURL, largeImageURL }) => (
                <img key={id} src={webformatURL} alt="" className="gallery_image" /> )
                
                )}
                 
        </li>
    )
    
};

export default ImageGalleryItem;