const getImgMeta = (url) => {
   return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = function() {
         const { width, height } = this;
          resolve({ width, height });
      }
   })
}

export default getImgMeta;