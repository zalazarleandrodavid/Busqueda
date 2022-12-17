import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import { DateTime } from 'luxon';
function Noticias({ datos }) {
  console.log('asas', datos);

  const mostrar = () => {

    const tabla = datos.map(elem => {

      /* return (
        <tr key={elem.name}>
          <td>{elem.author}</td>
          <td>{elem.title}</td>
          <td></td>
          <td>
            <a href={elem.url} target="_blank" rel="noopener noreferrer">Ampliar</a>
          </td>
        </tr> 
        
      ) */
      return (
        <Card style={{ marginTop:'15px', marginLeft:'5px', marginRight:'5px', marginBottom:'5px' }}  >

          <Card.Body>
            <Card.Title>
              <a href={elem.url} target="_blank" rel="noopener noreferrer">
                {elem.title}
              </a>
            </Card.Title>
            <Card.Text>
              {elem.description}
              <p style={{ color: '#1fbb1f' }}>
                Fecha de publicación:
                <span >
                  &nbsp;{DateTime.fromISO(elem.publishedAt).toLocaleString(DateTime.DATE_FULL)}
                </span>
              </p>
            </Card.Text>
            {/*  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
          </Card.Body>
        </Card>
      )
    })
    return tabla
  };

  return (
    <div>
      {datos && mostrar()}

    </div>

  );
}



export default Noticias;