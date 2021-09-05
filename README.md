REACT - GALERIA DE IMAGENES - PWA:

image-gallery-app-

![Captura1](https://user-images.githubusercontent.com/7141537/132133989-253129f6-a8b1-4fbe-8e11-53b363836bea.PNG)


## Tabla de contenidos

- [Herramientas]
- [Estrutura de carpetas]
- [Código]
- [PWA]



## Herramientas

Librerías y página utilizadas

* ` npx create-react-app 05-image-gallery-app --template cra-template-pwa` utilitario global - comando en línea para crear nuevos proyectos.
* `useState - useEffect - useCallback` User Hooks utilizados.
* `https://getbootstrap.com/` Librería Bootstrap.
* `https://material.io/develop/web/getting-started` Iconos de Bootstrap.
* `https://unsplash.com/developers` Servicios de fotos gratis para desarrolladores.  (Crear cuenta - generar client-id y access para desarrollo)

  ![Captura](https://user-images.githubusercontent.com/7141537/132135166-bd574615-082b-4cad-b54a-d15e0e5ecfbc.PNG)
  
  Crear cuenta y generar aplicación para tenera Access key y Secret Key para utilizar en nuestra aplicación
  
  ![Captura](https://user-images.githubusercontent.com/7141537/132135794-0a623562-31b8-4047-9c5f-7aa604efae0a.PNG)
  
  ![Captura](https://user-images.githubusercontent.com/7141537/132135823-09910ff7-96b9-43d3-9b2e-e797150ef966.PNG)
  
  Copiar Access Key para utilizar en nuestro aplicativo.
  
  ![Captura](https://user-images.githubusercontent.com/7141537/132135941-71ea761e-3892-433d-a848-248e50e7130e.PNG)
  
  ![Captura](https://user-images.githubusercontent.com/7141537/132136036-abe424f9-b718-4166-9268-6e03b9f5f911.PNG)

* `https://www.iconfinder.com/search?q=numbers&price=free` Iconos gratis en la nube.

   ![Captura](https://user-images.githubusercontent.com/7141537/132135061-8cb6165c-fd1e-4ce2-b157-50498d5b9a7b.PNG)
   
* `https://www.pwabuilder.com/imageGenerator` Generados de imágenes en la nube.
* `https://imagen.online-convert.com/es/convertir-a-ico` Conversor de png a ico.


* `https://app.netlify.com/` Plataforma de desarrollo web  para publicar programas para desarrolladores. (Crear cuenta)
  
  ![Captura](https://user-images.githubusercontent.com/7141537/132135016-08380545-32d9-4530-bc58-ff2471d4501a.PNG)


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

## PWA

* Crear imágenes (`https://www.pwabuilder.com/imageGenerator` Generados de imágenes en la nube.)

  ![Captura](https://user-images.githubusercontent.com/7141537/132135300-7cf91da5-0528-4161-b387-934370d61d3c.PNG)

* Ajustar el manifest.json

  ![Captura](https://user-images.githubusercontent.com/7141537/132135333-6b06f31a-578c-487d-b4ae-17480b3634bb.PNG)

* En el navegador: Instalar la APP

  ![Captura](https://user-images.githubusercontent.com/7141537/132135236-21318d51-4982-4a3d-b87c-1e215d73e45e.PNG)

* Al Instalar 

 ![Captura](https://user-images.githubusercontent.com/7141537/132135413-cbd18d2f-dd37-414c-b295-a97804ba09e1.PNG)
 
* Se genera acceso directo e icono en windows sobre la barra de herramientas y sobre el escritorio.
 
![Captura](https://user-images.githubusercontent.com/7141537/132135538-9a62e376-dd6b-4bca-9925-410267f123c3.PNG)
 
 * Se puede instalar en plataformas android y iPhone
 
 * Se puede luego desistalar.
 
   ![Captura](https://user-images.githubusercontent.com/7141537/132135635-4bd12beb-3bc0-49c0-b78a-f1dfd0c6a922.PNG)

#### NOTA: debe generar su propia ACCESS KEY Y SECRET KEY para su APP (Ver: https://unsplash.com/documentation)
