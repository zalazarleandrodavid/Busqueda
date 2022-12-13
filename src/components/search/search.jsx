import React from "react";
import { useEffect, useState } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Paginador from "../paginador/Paginador";
import noticias from "../noticias/Noticias";


function Search() {

  const [usuarios, setUsuarios] = useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([])
  const [busqueda, setBusqueda] = useState("");
  
    const peticionGet = async () => {
      await axios.get(`https://newsapi.org/v2/everything?q=${busqueda}&apiKey=93ec34e03d6f4d769b150cc027fc47ee&page=1&language=es&pageSize=10&language=es`)
        .then(response => {
          setUsuarios(response.data);
          setTablaUsuarios(response.data)
        }).catch(error => {
        //console.log(error);
        })
    }
    useEffect(() => {
      peticionGet();
    }, []) 

    
    //const url=(`https://newsapi.org/v2/everything?q=${busqueda}&apiKey=93ec34e03d6f4d769b150cc027fc47ee&page=1&language=es&pageSize=10&language=es`)
  
    //const showdata =async() =>{
      //const response = await fetch(url)
      //const data = await response.json()
      //console.log(data)
    //}
    //showdata()
  

  return (
    <>
      <h1>Buscador de Noticia</h1>
      <div>
        <div className="input-group mb-3">

          <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"
            onChange={(event) => setBusqueda(event.target.value)}

          />
          {busqueda.length >= 3 &&

            <Button onClick={peticionGet}>buscar</Button>
          }


        </div>

        <div>

        </div>

      </div>

    </>
  );
}



export default Search;


