import React from 'react';
import Container from './UI/Container';

const PhotoGallery = (props) => {
  return (
    <Container className = 'gallery'>
      {
        props.allImages.map( image => (
          <img src = {image.url} 
            width = {image.width} 
            height ={image.height} 
            key = {image.id} />
       ))
      }
 
    </Container>
  )
}


export default PhotoGallery;