import './App.css';
import Search from './components/search/search.jsx';
import Noticias from './components/noticias/Noticias';
import Paginador from './components/paginador/Paginador';
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
import logo from "./logo2.png";

function Home() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [mostrarErr, setMostrarErr] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    search();
  }

  const mostrarError = () => {

    if (mostrarErr) {
      console.log('Mostrar Error', searchTerm.length, 'results', searchResults.length);
      return <p className='text-danger' style={{ marginLeft: "38%", marginBottom: "1%" }}>No se encontro resultado</p>
    }
  }
  const search = async () => {
    const result = await axios(
      `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=3e3a42ae65bf4c1eb11a815c85fe7c0e&page=${currentPage}&language=es&pageSize=10&language=es`
    );
    setSearchResults(result.data.articles);
    setTotalPages(result.data.totalResults / 10);
    setTotalResults(result.data.totalResults);
    setLoading(false);
    setMostrarErr(searchResults.length === 0 ? true : false)
  };

  return (
    <>
      <div className="App" style={{ backgroundColor: "#F9F2F0" }}>
        <img src={logo} style={{ marginBottom: "1%", marginTop: "1%", marginLeft: "2%" }} ></img>
        <Search setSearchTerm={(elem) => { setSearchTerm(elem) }} searchTerm={searchTerm}
          setLoading={(elem) => { setLoading(elem) }}
          setCurrentPage={(elem) => { setCurrentPage(elem) }}
          totalResults={totalResults}
          search={search}
        />

        {loading ? (
          <Spinner animation="border" variant="primary" size="xl" style={{ marginLeft: "30%", padding: "20%" }} />
        ) : (
          searchResults.length > 0 ?
            <Noticias datos={searchResults} /> : mostrarError()

        )}

        {totalPages > 1 && (
          <Paginador
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        )}
        <footer className='mb-2 text-uppercase font-weight-bold text-info' style={{ marginLeft: "85%", marginBottom: "0.5%", marginTop: totalPages > 1 ? "0.5%" : "55%" }}>Informatorio 2022</footer>
      </div>

    </>

  );
}

export default Home;
