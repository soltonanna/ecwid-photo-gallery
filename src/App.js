import React, { useState } from "react"; 

/** Components */
import AddImage from "./components/AddImage";
import PhotoGallery from "./components/PhotoGallery";

/** Utils functions */
import getRandomId from "./utils/getRandomId";
import {isImageUrl, isJsonUrl} from "./utils/getExtension";
import getImgMeta from "./utils/getImgMeta";


const App = () => {
  const [addedImages, setAddedImages] = useState([]);

  const addImageHandler = async (url) => {
    if (isImageUrl(url)) {
      const { width, height } = await getImgMeta(url);
      setAddedImages( prevState => {
        return [{
          url: url,
          width,
          height,
          id: getRandomId(),
        }, ...prevState]
      });
    }
    else if (isJsonUrl(url)) {
      const jsonToArr = fetch(url)
        .then(result => result.json())
        .then((output) => {
          const { galleryImages } = output;
          galleryImages.forEach(element => {
            element.id = getRandomId();
          });
          setAddedImages( prevState => {
            return [
              ...galleryImages, 
              ...prevState]
          });
        })
      
    }
  }
  console.log(addedImages)
  return (
    <div className="photo-gallery">
      <h1 className="main-title"> Photo Gallery</h1>
      <p className = "main-desc">Excepteur sit et consequat minim. Mollit labore reprehenderit in ipsum enim. Qui id sint fugiat incididunt nostrud mollit eu consectetur id consectetur nisi nulla. Qui deserunt laboris officia cillum duis tempor reprehenderit Lorem nulla aute cupidatat occaecat sunt nisi.</p>
      
      <AddImage onAddImage = { addImageHandler } />

      <PhotoGallery allImages = { addedImages } />
    </div>
  );
}

export default App;
