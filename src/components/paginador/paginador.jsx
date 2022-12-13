import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from 'react';


const Paginador = ({ increment, decrement, page }) => {
  return (
    <>
    <button onClick={decrement}>Anterior</button>
    <button onClick={increment}>Siguiente</button>
    </>
      
  )
}

export default Paginador;
  
  

