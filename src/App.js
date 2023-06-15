import React from 'react';
import './App.css';
import axios from 'axios'
import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './image1.jpg';
import Footer from './footer';

function App() {

  const[datas,setData]=useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=> {
      setData(response.data);
      console.log(response.data);
    })
   },[]);
  
  return (
    <Row xs={'1'} sm={'2'} md={'2'} xl={'5'} className="g-4 justify-content-md-center">
      {datas.map((user,id)=>(
        <Col key={id}>
          <Card className='cards'>
            <div className='card_img_container'>
              <Card.Img src="https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg"/>
            </div>
              <Card.Title className='card_title'> {user.name} </Card.Title>
              <Card.Subtitle className='card_subtitle'> {user.username} </Card.Subtitle>
            <Card.Body>
              <Card.Text><span className='bold_text'>Empresa:</span> {user.company.name}</Card.Text>
              <Card.Text><span className='bold_text'>Sitio web:</span><Card.Link href=''> {user.website}</Card.Link></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))} 

    </Row>
  );
}

export default App;
