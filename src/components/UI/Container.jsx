import React from 'react';

const Container = (props) => {
   const classes = props.className ? props.className + ' container': 'container';
   return (
      <div className = { classes }> { props.children } </div>
   )
}

export default Container