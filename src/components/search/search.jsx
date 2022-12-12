import React from "react";
import { useEffect, useState } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Paginador from "../paginador/Paginador";


function Search() {

    const [usuarios, setUsuarios] = useState([]);
    const [busqueda, setBusqueda] = useState("");
  
    const peticionGet = async () => {
      await axios.get(`https://newsapi.org/v2/everything?q=${busqueda}&apiKey=3e3a42ae65bf4c1eb11a815c85fe7c0e&page=1&language=es&pageSize=10&language=es`)
        .then(response => {
          setUsuarios(response.data);
        }).catch(error => {
          //console.log(error);
        })
    }
  
    useEffect(() => {
      peticionGet();
    }, []) 

  const url=(`https://newsapi.org/v2/everything?q=${busqueda}&apiKey=3e3a42ae65bf4c1eb11a815c85fe7c0e&page=1&language=es&pageSize=10&language=es`)
  
    const showdata =async() =>{
      const response = await fetch(url)
      const data = await response.json()
      //console.log(data)
    }
    showdata()
    
    const totalResults = url
    const pagina = Math.ceil(parseInt(totalResults)/10)
    

    const increment= () => {
      for (let index = 0; index < totalResults.length; index+=20) {
        const element = totalResults[index];
        
      }
    }

  return (
    <>
      <h1>Buscador de Noticia</h1>
      <div>
        <div className="input-group mb-3">

          <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"
            onChange={(event) => setBusqueda(event.target.value)}

          />
          {busqueda.length >= 3 &&

            <Button >buscar</Button>
          }


        </div>

        <div>

        </div>

      </div>

    </>
  );
}



export default Search;


