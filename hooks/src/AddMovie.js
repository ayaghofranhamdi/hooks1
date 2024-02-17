import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const AddMovie = ({add}) => {

 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [title, setTitle] = useState("")
     const [description, setDescription] = useState("");
 const [rate, setRate] = useState(0);
    const [posterUrl, setPosterUrl] = useState("");
    
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleRate = (e) => {
        setRate(Number(e.target.value))
    }
    const handleImageSrc = (e) => {
        setPosterUrl(e.target.value);
    }

    const handleAdd = () => {
        add({id: Math.random(), title, description, rate, posterUrl });
        handleClose()
    }
  return (
    <div>
      {" "}
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label> Title</Form.Label>
          <Form.Control onChange={(e) => handleTitle(e)} />

          <Form.Label> description</Form.Label>
          <Form.Control onChange={(e) => handleDescription(e)} />

          <Form.Label> Rate</Form.Label>
          <Form.Control onChange={(e) => handleRate(e)} />

          <Form.Label> Image source</Form.Label>
          <Form.Control onChange={(e) => handleImageSrc(e)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> handleAdd()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddMovie