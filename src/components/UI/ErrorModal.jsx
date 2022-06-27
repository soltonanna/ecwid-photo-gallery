import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';
import Button from './Button';


const Backdrop = (props) => {
  return <div className = 'backdrop' onClick = { props.onConfirm }></div>
}

const ModalOverlay = (props) => {
  return (
    <Container className = 'error-modal'>
      <header>
        <h2> { props.title } </h2>
      </header>
      <div className = 'content'>
        <p> { props.message } </p>
      </div>
      <footer className = 'action'>
        <Button onClick = { props.onConfirm }> Okay </Button>
      </footer>
  </Container>
  )
}


const ErrorModal = (props) => {
  return (
    <>
      { ReactDOM.createPortal(
        <Backdrop 
          onConfirm = { props.onConfirm} />, 
          document.getElementById('backdrop-root')
        )
      }
      { ReactDOM.createPortal(
        <ModalOverlay
          title = { props.title }
          message = { props.message }
          onConfirm = { props.onConfirm} />, 
          document.getElementById('overlay-root')
        )
      }
    </>
  )
}

export default ErrorModal;