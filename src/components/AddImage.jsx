import React, {useState, useRef} from 'react';
import {isAllowedUrl}  from '../utils/getExtension';

import Container from './UI/Container';
import Button from './UI/Button';
import ErrorModal from './UI/ErrorModal';

const AddImage = (props) => {
   const [openForm, setOpenForm] = useState(false);
   const [errorModal, setErrorModal] = useState();
   const enteredImageUrl = useRef();

   const openFormHandler = (e) => {
      e.preventDefault();
      setOpenForm(!openForm);
   }

   const errorHandler = (e) => {
      e.preventDefault();
      setErrorModal(null);
   }

   const addImageHandler = (e) => {
      e.preventDefault();
      
      if ( enteredImageUrl.current.value.trim().length === 0 ) {
         setErrorModal({
            title: "Error1",
            message: "Error1 message",
         })
         return;
      }
      if ( !isAllowedUrl(enteredImageUrl.current.value) ) {
         setErrorModal({
            title:"Error2",
            message:"Error2 message"
         })
         return;
      }
      props.onAddImage(enteredImageUrl.current.value);
      enteredImageUrl.current.value = '';
      setOpenForm(!openForm);
   }

   // https://d3nn873nee648n.cloudfront.net/HomeImages/Concept-and-Ideas.jpg
   // https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif
   // https://don16obqbay2c.cloudfront.net/frontend-test-task/gallery-images.json
   // https://w7.pngwing.com/pngs/361/694/png-transparent-light-circle-geometry-science-and-technology-blue-mechanical-blue-angle-electronics-thumbnail.png

   return (
      <>
      { errorModal && 
         <ErrorModal 
            title = { errorModal.title } 
            message = { errorModal.message }
            onConfirm = { errorHandler }
         />
      }
      <Container className = "form">
         { !openForm && 
            <Button className = "open-form" onClick = { openFormHandler } >
               Add New Image
            </Button>
         }
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
               <Button type = "submit"> Add </Button>
            </form>
         }
      </Container>
      </>
   )
}

export default AddImage;