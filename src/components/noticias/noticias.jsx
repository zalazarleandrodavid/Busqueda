import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";

function noticias() {
  const Datos = {
    "status": "ok",
    "totalResults": 1627,
    "articles": [
      {
        "source": {
          "id": null,
          "name": "Hipertextual"
        },
        "author": "Gabriel Erard",
        "title": "A Bukele no le asusta el invierno cripto: El Salvador comprará un Bitcoin por día",
        "description": "Hacía rato que Nayib Bukele, el presidente de El Salvador, no hacía anuncios rimbombantes sobre el Bitcoin; pero ha vuelto al ruedo. Es que el mandatario anunció en Twitter que, desde hoy, el país centroamericano comprará 1 BTC por día. Una medida que parece …",
        "url": "https://hipertextual.com/2022/11/el-salvador-comprara-un-bitcoin-por-dia",
        "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2022/11/bukele-scaled.jpg",
        "publishedAt": "2022-11-17T16:21:15Z",
        "content": "Hacía rato que Nayib Bukele, el presidente de , no hacía anuncios rimbombantes sobre el Bitcoin; pero ha vuelto al ruedo. Es que el mandatario anunció en Twitter que, desde hoy, el país ce… [+3721 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Xataka.com"
        },
        "author": "Enrique Pérez",
        "title": "Nueva York toma la iniciativa en regular las criptomonedas. El primer paso ha sido prohibir la minería Bitcoin",
        "description": "Nueva York ha decidido crear una ley pionera. Y afecta directamente al mundo de las criptomonedas. El gobernador Kathy Hochul ha aprobado la prohibición de la minería Bitcoin, impidiendo que se otorguen nuevos permisos. Se trata de la primera legislación de e…",
        "url": "https://www.xataka.com/criptomonedas/nueva-york-toma-iniciativa-regular-criptomonedas-primer-paso-ha-sido-prohibir-mineria-bitcoin",
        "urlToImage": "https://i.blogs.es/264a74/mineria/840_560.jpg",
        "publishedAt": "2022-11-23T14:01:50Z",
        "content": "Nueva York ha decidido crear una ley pionera. Y afecta directamente al mundo de las criptomonedas. El gobernador Kathy Hochul ha aprobado la prohibición de la minería Bitcoin, impidiendo que se otorg… [+2460 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hipertextual"
        },
        "author": "Aglaia Berlutti",
        "title": "5 películas para entender mejor el mundo de las criptomonedas",
        "description": "La quiebra de la empresa de criptomonedas FTX fue una de las grandes noticias de las últimas semanas. En especial, porque la plataforma de compraventa de divisas digitales era una de las más sólidas del amplio mundo de las criptomonedas. Que tuviera que acoge…",
        "url": "https://hipertextual.com/2022/11/5-peliculas-criptomonedas",
        "urlToImage": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/11/Crypto-scaled.jpg?fit=2560%2C1708&quality=60&strip=all&ssl=1",
        "publishedAt": "2022-11-18T04:02:00Z",
        "content": "La quiebra de la empresa de criptomonedas FTX fue una de las grandes noticias de las últimas semanas. En especial, porque la plataforma de compraventa de divisas digitales era una de las más sólidas … [+9170 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Xataka.com"
        },
        "author": "Enrique Pérez",
        "title": "Cómo la palabra blockchain quedó corrompida y contaminada para siempre",
        "description": "La debacle con FTX está siendo una vergüenza difícil de justificar. Incluso los defensores más acérrimos de las criptomonedas ven inaceptable lo que ha ocurrido con el que era el tercer exchange más grande del mundo. Muchos analistas alertaban de los riesgos …",
        "url": "https://www.xataka.com/criptomonedas/como-palabra-blockchain-quedo-corrompida-contaminada-para-siempre",
        "urlToImage": "https://i.blogs.es/224e96/blockchain/840_560.jpg",
        "publishedAt": "2022-11-13T18:01:39Z",
        "content": "La debacle con FTX está siendo una vergüenza difícil de justificar. Incluso los defensores más acérrimos de las criptomonedas ven inaceptable lo que ha ocurrido con el que era el tercer exchange más … [+3249 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Genbeta.com"
        },
        "author": "Marcos Merino",
        "title": "El BCE carga contra el bitcoin: asegura que va \"camino de la irrelevancia\" y cree que regularlo fue un error que sólo lo legitimó",
        "description": "El blog oficial del Banco Central Europeo, el regulador monetario del 'Espacio Euro', publica hoy un artículo sobre el Bitcoin (e, indirectamente, sobre el resto de criptomonedas). Y se explaya a gusto, sin duda. Tras recordar que en poco más de medio año (de…",
        "url": "https://www.genbeta.com/actualidad/bce-carga-bitcoin-asegura-que-va-camino-irrelevancia-cree-que-regularlo-fue-error-que-solo-legitimo",
        "urlToImage": "https://i.blogs.es/90585b/bce_bitcoin/840_560.jpg",
        "publishedAt": "2022-11-30T19:50:50Z",
        "content": "El blog oficial del Banco Central Europeo, el regulador monetario del 'Espacio Euro', publica hoy un artículo sobre el Bitcoin (e, indirectamente, sobre el resto de criptomonedas). Y se explaya a gus… [+2475 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hipertextual"
        },
        "author": "Gabriel Erard",
        "title": "Un abogado de FTX asegura que buena parte de sus activos han sido robados",
        "description": "Malas noticias para los acreedores de FTX: es cada vez menos probable que recuperen sus fondos. Eso dio a entender uno de los abogados del exchange de criptomonedas, quien aseguró que una \"cantidad considerable\" de sus activos han sido robados. La afirmación …",
        "url": "https://hipertextual.com/2022/11/ftx-asegura-gran-parte-fondos-robados",
        "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2022/11/ftx.jpg",
        "publishedAt": "2022-11-23T13:06:39Z",
        "content": "Malas noticias para los acreedores de FTX: es cada vez menos probable que recuperen sus fondos. Eso dio a entender uno de los abogados del exchange de criptomonedas, quien aseguró que una \"cantidad c… [+3501 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Genbeta.com"
        },
        "author": "Bárbara Bécares",
        "title": "El bitcoin cae en picado, y el fiasco de FTX está acelerando esta caída: baja de 16.000 dólares por primera vez desde 2020",
        "description": "Desde que FTX quebrase y se conocieran sus irregularidades en su gestión (aprobaba los gastos con emojis en un chat online y carecía de departamento de contabilidad , por ejemplo), incluso los gigantes del sector están pidiendo regulación y es que, el mercado…",
        "url": "https://www.genbeta.com/actualidad/bitcoin-cae-picado-fiasco-ftx-esta-acelerando-esta-caida-baja-16-000-dolares-primera-vez-2020",
        "urlToImage": "https://i.blogs.es/f91b32/andre-francois-mckenzie-igyibhdntpe-unsplash/840_560.jpg",
        "publishedAt": "2022-11-21T12:44:08Z",
        "content": "Desde que FTX quebrase y se conocieran sus irregularidades en su gestión (aprobaba los gastos con emojis en un chat online y carecía de departamento de contabilidad , por ejemplo), incluso los gigant… [+1773 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Xataka.com"
        },
        "author": "Javier Pastor",
        "title": "La llegada del euro digital es inevitable. Vayamos diciendo adiós al anonimato",
        "description": "Parece que nos acercamos al principio del fin para el dinero físico. El Banco Central Europeo (BCE) lleva tiempo preparándonos para la creación del euro digital, una divisa que quiere imponerse al bitcoin y otras criptomonedas y que teóricamente iba a complem…",
        "url": "https://www.xataka.com/criptomonedas/llegada-euro-digital-inevitable-vayamos-diciendo-adios-al-anonimato",
        "urlToImage": "https://i.blogs.es/3a58bb/captura-de-pantalla-2022-12-07-a-las-11.06.58/840_560.jpeg",
        "publishedAt": "2022-12-07T13:00:54Z",
        "content": "Parece que nos acercamos al principio del fin para el dinero físico. El Banco Central Europeo (BCE) lleva tiempo preparándonos para la creación del euro digital, una divisa que quiere imponerse al bi… [+4588 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Xataka.com"
        },
        "author": "Javier Pastor",
        "title": "El descalabro de FTX ha generado un peligroso efecto dominó: Genesis es su última víctima",
        "description": "El espectacular caos que se está viviendo con FTX no solo afecta al que fuera tercer mercado de criptomonedas a nivel mundial: entidades que tenían una fuerte relación con esa entidad ahora están en peligro, y la última protagonista es Genesis, otro gigante d…",
        "url": "https://www.xataka.com/criptomonedas/descalabro-ftx-ha-generado-peligroso-efecto-domino-genesis-su-ultima-victima",
        "urlToImage": "https://i.blogs.es/cf8ae7/bored/840_560.jpeg",
        "publishedAt": "2022-11-24T13:00:55Z",
        "content": "El espectacular caos que se está viviendo con FTX no solo afecta al que fuera tercer mercado de criptomonedas a nivel mundial: entidades que tenían una fuerte relación con esa entidad ahora están en … [+2531 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Xataka.com"
        },
        "author": "Enrique Pérez",
        "title": "Pánico entre los inversores cripto, auge de los monederos fríos: cómo funcionan los \"cold wallets\"",
        "description": "La confianza en los 'exchanges' está en mínimos tras el colapso de FTX. El pánico se ha apoderado de muchos inversores en criptomonedas, que están retirando sus pertenencias en masa. Hasta la fecha se dejaba la responsabilidad de la gestión de estos criptoact…",
        "url": "https://www.xataka.com/criptomonedas/panico-inversores-cripto-auge-monederos-frios-como-funcionan-cold-wallets",
        "urlToImage": "https://i.blogs.es/0c07cc/cold-wallet/840_560.jpg",
        "publishedAt": "2022-11-14T16:30:02Z",
        "content": "La confianza en los 'exchanges' está en mínimos tras el colapso de FTX. El pánico se ha apoderado de muchos inversores en criptomonedas, que están retirando sus pertenencias en masa. Hasta la fecha s… [+3190 chars]"
      }
    ]
  }
  const mostrar = () => {

    const d = Datos.articles.map(elem => {
      /*  console.log(elem.author); */
      return (
        <tr key={elem.name}>
          <td>{elem.author}</td>
          <td>{elem.title}</td>
          <td>{elem.description}</td>
          <td>{elem.url}</td>
        </tr>
      )
    })
    return d
  };

  return (
    <div className="noti">
      <table className="table table-sm table-bordered">
        <thead>
          <tr>
            <th>author</th>
            <th>name</th>
            <th>title</th>
            <th>description</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>

          {Datos && mostrar()}

        </tbody>

      </table>
    </div>

  );
}



export default noticias;