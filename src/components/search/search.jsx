import React from "react";
import { useEffect, useState } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Paginador from "../paginador/Paginador";
import noticias from "../noticias/Noticias";
import { DateTime } from 'luxon';
import Spinner from 'react-bootstrap/Spinner';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    // Realizar la búsqueda aquí utilizando la API de NewsAPI
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=93ec34e03d6f4d769b150cc027fc47ee&page=1&language=es&pageSize=10&language=es`
      );
      setSearchResults(result.data.articles);
      setLoading(false);
    };
    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" disabled={searchTerm.length <=3}>Buscar</button>
      </form>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        searchResults.map((result) => (
          <div key={result.title}>
            <h3>{result.title}</h3>
            <p>{result.description}</p>
            <p>
              Fecha de publicación: {DateTime.fromISO(result.publishedAt).toLocaleString(DateTime.DATE_FULL)}
            </p>
            <a href={result.url} target="_blank" rel="noopener noreferrer">Leer más</a>
          </div>
        ))
      )}
    </div>
  );
};

export default Search;

