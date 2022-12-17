import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";

function Noticias({ datos }) {
  console.log('asas', datos);

  const mostrar = () => {

    const tabla = datos.map(elem => {

      return (
        <tr key={elem.name}>
          <td>{elem.author}</td>
          <td>{elem.title}</td>
          <td>{elem.description}</td>
          <td>
            <a href={elem.url} target="_blank" rel="noopener noreferrer">Ampliar</a>
          </td>
        </tr>
      )
    })
    return tabla
  };

  return (
    <div>
      <table className="table table-sm table-bordered">
        <thead>
          <tr>
            <th>Autor</th>
            <th>Titulo</th>
            <th>Descripcion</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>

          {datos && mostrar()}

        </tbody>

      </table>
    </div>

  );
}



export default Noticias;