import React from 'react';
import { Button } from "react-bootstrap";

const Paginador = (props) => {
  const { totalPages, currentPage, handlePageChange } = props;

  return (
    <div>
      {currentPage > 1 && <Button onClick={() => handlePageChange(currentPage - 1)}>Anterior</Button> }
      {currentPage} {totalPages>0&& <span>De</span>} {totalPages}
      {currentPage < totalPages && <Button onClick={() => handlePageChange(currentPage + 1)}>Siguiente</Button>}
      
    </div>
    
  );
}

export default Paginador;

  

