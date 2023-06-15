import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div className='body'>
    <Navbar />
    <div className='container'>
        <App />
    </div>
    <Footer />
</div>
);



