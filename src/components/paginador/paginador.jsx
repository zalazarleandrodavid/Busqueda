import React from 'react';
import { Button } from "react-bootstrap";

const Paginador = (props) => {
  const { totalPages, currentPage, handlePageChange } = props;

  return (
    <div style={{ marginLeft: "40%", marginBottom:"1%", marginTop:"0.5%" }}>
      {currentPage > 1 && <Button style={{ marginRight: "2%" }} onClick={() => handlePageChange(currentPage - 1)}>Anterior</Button>}
      <span style={{ fontSize: "30px" }}>{currentPage}</span>  {totalPages > 0 && <span>De</span>} <span>{totalPages}</span>
      {currentPage < totalPages && <Button style={{ marginLeft: "2%" }} onClick={() => handlePageChange(currentPage + 1)}>Siguiente</Button>}

    </div>

  );
}

export default Paginador;



