import React, {useState, useRef} from 'react';
import {isAllowedUrl}  from '../utils/getExtension';
import Container from './UI/Container';
import Button from './UI/Button';

const AddImage = (props) => {
   const [openForm, setOpenForm] = useState(false);
   const enteredImageUrl = useRef();

   const openFormHandler = (e) => {
      e.preventDefault();
      setOpenForm(!openForm);
   }

   const addImageHandler = (e) => {
      e.preventDefault();
      
      if ( enteredImageUrl.current.value.trim().length === 0 ) {
         alert("wrong-empty url");
         return;
      }
      if ( !isAllowedUrl(enteredImageUrl.current.value) ) {
         alert("wrong type");
         return;
      }
      
      props.onAddImage(enteredImageUrl.current.value);
   
      enteredImageUrl.current.value = '';
   }

   // https://d3nn873nee648n.cloudfront.net/HomeImages/Concept-and-Ideas.jpg
   // https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif
   // https://don16obqbay2c.cloudfront.net/frontend-test-task/gallery-images.json
   // https://w7.pngwing.com/pngs/361/694/png-transparent-light-circle-geometry-science-and-technology-blue-mechanical-blue-angle-electronics-thumbnail.png

   return (
      <Container>
         <h2>You want to add the new images to your gallery ? Then let's go !! </h2>
         <Button className = 'open-form' onClick = { openFormHandler } >
            { !openForm ? "Open Form" : "Close Form" }
         </Button>
         
         { openForm && 
         <form onSubmit = { addImageHandler } >
            <div className = 'form-control'>
               <label htmlFor = 'add-image-input'>Add Image</label>
               <input 
                  id = 'add-image-input' 
                  type = 'text' 
                  placeholder = 'we need some URL...'
                  ref = { enteredImageUrl }
                  />
            </div>
            <Button type = "submit"> Add Images </Button>
         </form>
         }
         
      </Container>
   )
}

export default AddImage;