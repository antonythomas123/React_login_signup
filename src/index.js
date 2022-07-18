import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Home from './Components/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path = '/login' element={<Login/>}/>
        <Route path = '/signup' element = {<Signup/>}/>
        <Route path = '/home' element = {<Home/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

