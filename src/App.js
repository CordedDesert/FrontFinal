import React from 'react';
import './App.css';
import axios from 'axios'
import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
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
    <Row xs={'1'} sm={'2'}  md={'3'} className="g-4 justify-content-center">
      {datas.map((user,id)=>(
        <Col key={id}>
          <Card className='cards'>
            <div className='card_img_container'>
              <Card.Img src="https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg"/> {/* Se declara en general, para ser mas rapido, para cuando sea funcional, se añadiria a cada card una diferente */}
            </div>
              <Card.Title className='card_title'> {user.name} </Card.Title>
              <Card.Subtitle className='card_subtitle'> {user.username} </Card.Subtitle>
              <hr className='hrtitle'></hr>
            <Card.Body>
              <Card.Text><span className='bold_text'>City:</span> {user.address.city} </Card.Text>
              <hr></hr>
              <Card.Text><span className='bold_text'>Company:</span> {user.company.name} </Card.Text>
              <hr></hr>
              <Card.Text><span className='bold_text'>Website:</span><Card.Link href=''> {user.website}</Card.Link></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))} 

    </Row>
  );
}

export default App;
