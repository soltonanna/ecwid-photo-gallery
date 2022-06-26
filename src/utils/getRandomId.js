let lastId = 0;
const getRandomId = ( prefix = 'id' ) => {
   lastId++;
   return `${prefix}${lastId}`;
}


export default getRandomId;