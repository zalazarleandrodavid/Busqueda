import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import { DateTime } from 'luxon';
import { Row, Col } from 'react-bootstrap'
function Noticias({ datos }) {

  const mostrar = () => {

    const card = datos.map(elem => {

      return (
        <Card style={{ marginTop: '1%', marginLeft: '2%', marginRight: '2%', marginBottom: '1%' }}  >
          <Row>

            <Col xl={10}>
              <Card.Body>
                <Card.Title>
                  <a href={elem.url} target="_blank" rel="noopener noreferrer">
                    {elem.title}
                  </a>
                </Card.Title>

                <Card.Text>
                  {elem.description}
                  <p className="pt-5" style={{ color: '#1fbb1f' }}>
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
            </Col>
            <Col>
              <img src={elem.urlToImage} alt="Imagen de la noticia" style={{ width: '90%', height: '70%', marginTop:'10%' }} />

            </Col>
          </Row>

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