import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Paginador from './Paginador';

describe('Paginador', () => {
  it('debería renderizar el componente', () => {
    const { container } = render(<Paginador />);
    expect(container).toMatchSnapshot();
  });

  it('debería mostrar el botón "Anterior" si la página actual es mayor que 1', () => {
    const { getByText } = render(<Paginador currentPage={2} />);
    expect(getByText('Anterior')).toBeInTheDocument();
  });

  it('no debería mostrar el botón "Anterior" si la página actual es 1', () => {
    const { queryByText } = render(<Paginador currentPage={1} />);
    expect(queryByText('Anterior')).not.toBeInTheDocument();
  });

  it('debería mostrar el botón "Siguiente" si la página actual es menor que el total de páginas', () => {
    const { getByText } = render(<Paginador currentPage={1} totalPages={2} />);
    expect(getByText('Siguiente')).toBeInTheDocument();
  });

  it('no debería mostrar el botón "Siguiente" si la página actual es igual al total de páginas', () => {
    const { queryByText } = render(<Paginador currentPage={2} totalPages={2} />);
    expect(queryByText('Siguiente')).not.toBeInTheDocument();
  });

  it('debería llamar a la función "handlePageChange" al hacer clic en el botón "Anterior"', () => {
    const handlePageChange = jest.fn();
    const { getByText } = render(<Paginador currentPage={2} handlePageChange={handlePageChange} />);
    fireEvent.click(getByText('Anterior'));
    expect(handlePageChange).toHaveBeenCalledWith(1);
  });

  it('debería llamar a la función "handlePageChange" al hacer clic en el botón "Siguiente"', () => {
    const handlePageChange = jest.fn();
    const { getByText } = render(<Paginador currentPage={1} totalPages={2} handlePageChange={handlePageChange} />);
    fireEvent.click(getByText('Siguiente'));
    expect(handlePageChange).toHaveBeenCalledWith(2);
  });
});
