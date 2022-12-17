import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import { DateTime } from 'luxon';

function Noticias({ datos }) {

  const mostrar = () => {

    const card = datos.map(elem => {

      return (
        <Card style={{ marginTop: '1%', marginLeft: '2%', marginRight: '2%', marginBottom: '1%' }}  >
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
                  &nbsp;{DateTime.fromISO(elem.publishedAt).toLocaleString(DateTime.DATE_FULL)} &nbsp;
                  <span>
                    a las
                  </span>
                  &nbsp;{DateTime.fromISO(elem.publishedAt).toLocaleString(DateTime.TIME_24_SIMPLE)}
                  &nbsp;<span>hs</span>
                </span>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      )
    })
    return card
  };

  return (
    <div>
      {datos && mostrar()}
    </div>

  );
}



export default Noticias;