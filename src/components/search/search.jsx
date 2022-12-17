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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setCurrentPage(1);
    search();
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
    search();
  }

  const search = async () => {
    const result = await axios(
      `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=3e3a42ae65bf4c1eb11a815c85fe7c0e&page=${currentPage}&language=es&pageSize=10&language=es`
    );
    setSearchResults(result.data.articles);
    setTotalPages(result.data.totalResults / 10);
    setTotalResults(result.data.totalResults);
    setLoading(false);

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
        />

        <button type="submit" disabled={searchTerm.length <= 3}>Buscar</button>
        {totalResults > 0 && (
        <p>Está viendo 10 noticias de {totalResults} resultados</p>
      )}

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
            <a href={result.url} target="_blank" rel="noopener noreferrer">Ampliar</a>
          </div>
        ))
      )}
      {totalPages > 1 && (
        <Paginador
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      )}

    </div>

  );
};

export default Search;