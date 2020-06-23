# Platzi - Webpack 4
[![badge](https://img.shields.io/static/v1.svg?style=flat-square&label=Node&message=v10.15.1&color=brightgreen&logo=node.js)](https://nodejs.org/es/ "Node.js website")
[![badge](https://img.shields.io/static/v1.svg?style=flat-square&label=Npm&message=v6.14.5&color=brightgreen&logo=npm)](https://www.npmjs.com/ "Npm website")


Webpack es un empaquetador de javascript, empaquetador de módulos de JS. Convierte módulos con dependencias en archivos estáticos que los navegadores entienden.

Nos permite empaquetar, optimizar los diferentes módulos Javascript y sus dependencia en nuestro proyecto. Es usado en proyectos basados en Javascript como: React, Vue, Angular entre otros.

#### User Experience
Se logra con una aplicación que:

- Funcione
- Sea rápida
- Cumpla sus necesidades
- Se actualice
- Responda a sus interacciones
- Producto de calidad

#### Developer Experience
- Escribir aplicaciones de manera eficiente.
- Tener un código limpio.
- Aplicar tecnología para resolver sus problemas.
- Tener un conjunto de reglas y convenciones.
- Entorno de desarrollo optimizado en productividad.

---
#### Clase 4
Vamos a instalar otra dependencia llamada **webpack-cli**, la API que expone webpack en forma de **CLI (Command Line Interface)** que nos va a permitir interactuar y configurar Webpack desde la terminal.

El comando webpack tiene una bandera llamada `--mode` que nos permite cambiar entre los modos producción y desarrollo. Recuerda que por defecto nos pone en modo producción si no la especificamos.

```sh
npx webpack --entry ./index.js --output ./bundle.js --mode development
```

```sh
npx webpack --entry ./index.js --output ./bundle.js --mode production
```

---

#### Clase 8

Los **Loaders** son la funcionalidad que nos da Webpack para interpretar tipos de archivos no soportados de forma nativa por Javascript.

**style-loader** sirve para inyectar un tag style (el CSS) al DOM de nuestro HTML, mientras que css-loader sólo sirve para interpretar archivos CSS.

--- 

#### Clase 9

Los Plugins sirven para extender las capacidades de webpack y dar más poder a los loaders.

