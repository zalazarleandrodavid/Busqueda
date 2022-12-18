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
});
