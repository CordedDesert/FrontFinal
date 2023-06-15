import React from 'react'
import Form from 'react-bootstrap/Form';


function Footer() {
  return (
    <div className='footer' id='contact'>
     <Form className='form container'>
      <Form.Group className="mb-3 lg-4" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email lg-4" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3 lg-4" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>  
    </div>
  )
}

export default Footer