import React, { useState, useEffect } from 'react'

import { motion } from 'framer-motion'

import logo from './icons/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Stack, Container, Row, Col, Form, FormControl, Image } from 'react-bootstrap';

import Login from './pages/Login';
import Home from './pages/Home';

function App() {

  return (
    <Container>
      
      {/* <Login/> */}
      <Home/>
    </Container>
  );
}

export default App;
