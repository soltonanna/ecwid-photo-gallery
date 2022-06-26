import React from 'react';

const Button = (props) => {
   const classes = props.className ? props.className + ' btn': 'btn';
   return (
      <button 
         className = {classes} 
         type = { props.type ? props.type : 'button' }
         onClick = { props.onClick } > 
            { props.children } 
      </button>
   )
}
export default Button;