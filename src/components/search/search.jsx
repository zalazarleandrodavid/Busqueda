import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Search = ({ setSearchTerm, searchTerm, totalResults, setCurrentPage, setLoading, search }) => {

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setCurrentPage(1);
    search();
  }

  return (
    <div className="mx-auto ">
      <form onSubmit={handleSubmit} className="my-3" style={{ marginLeft: "35%" }}>
        <div className="mx-3">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Buscar Noticias"
            style={{ padding: "0.25rem", width: "30%", borderRadius: "5px 5px 5px 5px" }}
          />
          <Button type="submit" className="mx-3" disabled={searchTerm.length < 3} style={{ padding: "0.3rem", }}>Buscar</Button>
        </div>
      </form>

      {totalResults > 0 && (
        <div className="my-3" >
          <h4 style={{ marginLeft: "30%" }}>Está viendo 10 noticias de {totalResults} resultados</h4>
        </div>

      )}

    </div>

  );
};

export default Search;