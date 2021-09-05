CURSO REACT - GALERIA DE IMAGENES - PWA:

image-gallery-app-

![Captura1](https://user-images.githubusercontent.com/7141537/132133989-253129f6-a8b1-4fbe-8e11-53b363836bea.PNG)


## Tabla de contenidos

- [Updating to New Releases](#updating-to-new-releases)
- [Sending Feedback](#sending-feedback)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)


## Herramientas

Librerías y página utilizadas

* ` npx create-react-app 05-image-gallery-app --template cra-template-pwa` utilitario global - comando en línea para crear nuevos proyectos.
* `useState - useEffect - useCallback` User Hooks utilizados.
* `https://getbootstrap.com/` Librería Bootstrap.
* `https://material.io/develop/web/getting-started` Iconos de Bootstrap.
* `https://unsplash.com/developers` Servicios de fotos gratis para desarrolladores.
* `https://www.flaticon.es/packs/resultados?word=business&type=icon` Iconos gratis en la nube.
* `https://www.pwabuilder.com/imageGenerator` Generados de imágenes en la nube.
* `https://imagen.online-convert.com/es/convertir-a-ico` Conversor de png a ico.
* `https://app.netlify.com/` Plataforma de desarrollo web  para publicar programas para desarrolladores.


## Estrutura de carpetas

![Captura](https://user-images.githubusercontent.com/7141537/132134642-dcce9bf6-e5dc-406c-8f96-56fa1cd0ad87.PNG)



## Código

Ejemplos:


### `Index.js`

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

### `App.jsx`

```js
import React from "react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Container />
      <Footer />
    </>
  );
};

export default App;
```

### `Cards.js`

```js
import React from "react";
import { useFetchImage } from "../../hooks/useFetchImage";
import FormImg from "../FormImg";
import Loading from "../Loading";
import Card from "./Card";

const Cards = () => {
  const [images, loading, handleSubmit] = useFetchImage();
  return (
    <div className="text-center">
      <FormImg handleSubmit={handleSubmit} />
      <hr />

      {loading && <Loading />}

      <div className="row">
        {images.length > 0 &&
          images.map((item) => {
            return (
              <div className="col" key={item.id}>
                <Card img={item.urls.regular} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cards;};
```
### `Card.js`

```js
import React from "react";
import PropTypes from "prop-types";

const Card = ({ img }) => {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="imagen.png" />
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
};

export default Card;
```

### `Header.js`

```js
import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Galeria App</span>
      </div>
    </nav>
  );
};

export default Header;
```

### `Loading.js`

```js
import React from "react";

const Loading = () => {
  return (
    <div className="spinner-border text-success" role="status">
      <span className="visually-hidden">Cargando...</span>
    </div>
  );
};

export default Loading;
```

### `FormImg.js`

```js
import React from "react";
import PropTypes from "prop-types";

const FormImg = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label className="w-75">
        Buscar: <input type="text" className="w-75" name="inputText" />{" "}
        <button type="submit" className="btn btn-warning mx-2">
          <span className="material-icons">Buscar</span>
        </button>
      </label>
    </form>
  );
};

FormImg.propTypes = {
  handleSubmit: PropTypes.func,
};

export default FormImg;
```

### `useFetchImage.js`

```js
  const peticion = useCallback(async () => {
    const key = "client_id=nHO9HlChIrXOLZFzSkExu_dxPTcp6RwGrzo58kXBPAk";
    let route = `https://api.unsplash.com/photos/?${key}`;

    if (input !== "") {
      route = `https://api.unsplash.com/search/photos/?query=${input}&${key}`;
    }

    setLoading(true);
    const res = await fetch(route);
    const data = await res.json();

    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }
    setLoading(false);
  }, [input]);

  useEffect(() => {
    peticion();
  }, [peticion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    setInput(e.target[0].value);
  };

  return [images, loading, handleSubmit];
};

```



