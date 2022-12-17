import React from "react";
import { useEffect, useState } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Paginador from "../paginador/Paginador";
import noticias from "../noticias/Noticias";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realizar la búsqueda aquí utilizando la API de NewsAPI
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=93ec34e03d6f4d769b150cc027fc47ee&page=1&language=es&pageSize=10&language=es`
      );
      setSearchResults(result.data.articles);
    };
    fetchData();
  }, [searchTerm]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {searchResults.map((result) => (
        <div key={result.title}>
          <h3>{result.title}</h3>
          <p>{result.description}</p>
          <a href={result.url}>Read more</a>
        </div>
      ))}
    </div>
  );
};

export default Search;


