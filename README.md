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



## Code Splitting

Instead of downloading the entire app before users can use it, code splitting allows you to split your code into small chunks which you can then load on demand.

This project setup supports code splitting via [dynamic `import()`](http://2ality.com/2017/01/import-operator.html#loading-code-on-demand). Its [proposal](https://github.com/tc39/proposal-dynamic-import) is in stage 3. The `import()` function-like form takes the module name as an argument and returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which always resolves to the namespace object of the module.

Here is an example:

### `moduleA.js`

```js
const moduleA = 'Hello';

export { moduleA };
```
### `App.js`

```js
import React, { Component } from 'react';

class App extends Component {
  handleClick = () => {
    import('./moduleA')
      .then(({ moduleA }) => {
        // Use moduleA
      })
      .catch(err => {
        // Handle failure
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Load</button>
      </div>
    );
  }
}

export default App;
```



