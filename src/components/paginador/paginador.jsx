import React from 'react';

const Paginador = (props) => {
  const { totalPages, currentPage, handlePageChange } = props;

  return (
    <div>
      {currentPage > 1 && <button onClick={() => handlePageChange(currentPage - 1)}>Anterior</button> }
      {currentPage}  {totalPages}
      {currentPage < totalPages && <button onClick={() => handlePageChange(currentPage + 1)}>Siguiente</button>}
      
    </div>
    
  );
}

export default Paginador;

  

