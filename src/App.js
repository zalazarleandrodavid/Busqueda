import './App.css';
import Search from './components/search/search.jsx';
import Loanding from './components/loanding/Loanding';
import Noticias from './components/noticias/Noticias';
import Paginador from './components/paginador/Paginador';
import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

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
    <div className="App">
      <Search setSearchTerm={(elem) => { setSearchTerm(elem) }} searchTerm={searchTerm}
        setLoading={(elem) => { setLoading(elem) }}
        setCurrentPage={(elem) => { setCurrentPage(elem) }}
        totalResults={totalResults}
        search={search}
      />

      {loading ? (
        <Spinner animation="border" variant="primary" size="xl" style={{ marginLeft: "30%", padding: "20%" }} />
      ) : (
        <Noticias datos={searchResults} />
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
}

export default App;
