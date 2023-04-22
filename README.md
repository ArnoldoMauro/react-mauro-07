# Proyecto ecommerce en React
## App creada para el curso de React de CoderHouse.
### Autor: Arnoldo Mauro (abril /2023)
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

## 1.	Como ejecutar el proyecto

- git clone https://github.com/ArnoldoMauro/react-mauro-07.git
- npm install
- npm run start

## 2.	Descripción general del sitio web
Mi nombre es Arnoldo Néstor Mauro y soy el creador de este sitio de e-commerce para una tienda de vinos on line.
Este sitio web se construyó con el propósito de adquirir conocimientos en el uso y manejo de la librería React JS en conjunto con Javascript. Ambos módulos forman parte del curso de Desarrollo Web Front End de CODERHOUSE. Anteriormente adquirí los conocimientos de HTML y CSS, de esta manera, se cierra una etapa sumamente productiva y de aprendizaje en el mundo de la programación. 
El sitio tiene como temática una tienda de ventas online de vinos de los productos de algunas de las bodegas más reconocidas del mercado, las cuales pueden adquirirse a través de este sitio. 
Está organizado a través de diversos componentes entrelazados de manera dinámica, en función de la elección que va realizando el usuario para obtener el producto de su preferencia. 

## 3. Funcionalidad de este sitio web
Inicialmente tenemos un componente (ItemListContainer) que se encarga de administrar las Card en la Homepage. Este componente inicial permite dar entrada a los productos en pantalla, que se muestran clasificados en distintas Cards (tajetas) con la imagen, el título, la categoría y el precio de cada producto que se encuentra disponible para la venta on line. 
Cuando el usuario selecciona algún producto, el sitio da entrada al componente [ItemDetailContainer] que muestra la card seleccionada en un tamaño más grande, con las características ampliadas del producto, debajo de este componente, se renderiza un componente (Count), que permite al usuario indicar la cantidad de ese producto que desea adquirir. Está compuesto por un botón que aumenta de a uno y otro que resta de a uno. Entre ambos botones veremos el número que representa a la cantidad que se va a comprar. 
El paso siguiente es la confirmación a través de un botón que da acceso a Carrito de compras de los productos con sus respectivas cantidades. 

Un tema importante de este proceso de compra lo constituye el componente (Context). En React, el componente Context cumple la función de permitir compartir datos entre componentes sin necesidad de pasarlos manualmente a través de las propiedades (props) de cada componente en la jerarquía de componentes. 
El Context en React es una característica que permite crear un contexto global, donde se pueden almacenar datos que se pueden acceder desde cualquier componente en la aplicación sin necesidad de pasarlos a través de los props de manera explícita.
El (Context.Provider) es el componente que define el contexto y proporciona los datos que se desean compartir.
Otra manera de filtrar los productos es desde la barra de navegación, en donde se encuentran los distintos varietales que pueden adquirirse en la tienda.  Aquí encontramos los Malbec, los Cabernet, los Syrah y los Merlot. A través de este filtro se renderizan en pantalla únicamente los que coincidan con la categoría seleccionada por el usuario.

Una vez agregados los productos en el carrito, el usuario deberá clickear en la opción Cart de la barra de navegación, lo cual dará acceso a la visualización de una lista donde se detallan los productos cargados en el carrito. Esta lista que también está configurada dentro de un componente, se compone de una imagen en miniatura de cada producto, titulo, precio, cantidad, un botón para Remover y el precio total de cada producto en el carrito.
Más abajo veremos un formulario que el usuario deberá completar con sus datos personales para pasar a la emisión de la orden de compra, la cual quedará guardada en la base de datos de Firestore.

## 4.	Tecnologías utilizadas

Este sitio web se desarrolló básicamente utilizando la librería React JS, React es una biblioteca de JavaScript de código abierto para la construcción de interfaces de usuario (UI) interactivas y reutilizables. Una aplicación codificada en React, generalmente utiliza varias tecnologías y herramientas para su desarrollo. Algunas de las tecnologías comunes utilizadas en una aplicación codificada en React incluyen:

    a) React: React es la biblioteca principal utilizada para construir la interfaz de usuario de la aplicación. React permite crear componentes reutilizables y gestionar el estado de la aplicación de manera eficiente.
    
    b) JSX: es una extensión de sintaxis de JavaScript que permite escribir código HTML en archivos de JavaScript. Se utiliza con React para definir la estructura de la interfaz de usuario de la aplicación.
    
    c) Babel: Babel es un transpilador de JavaScript que permite escribir código JavaScript moderno, incluyendo JSX, y convertirlo en código JavaScript compatible con versiones anteriores de los navegadores.

    d) Webpack: Webpack es una herramienta de empaquetado de módulos que se utiliza para compilar y empacar el código fuente de la aplicación en un solo archivo o varios archivos, optimizando así el rendimiento de la aplicación.
    
    e) Estilizado: Para darle estilo a la interfaz de usuario de la aplicación, se utilizaron CSS en modulos conjuntamente con la biblioteca Bootstrap.
    
    f) Firestore: Firestore es un servicio de base de datos en tiempo real y en la nube proporcionado por Google como parte de su plataforma de desarrollo de aplicaciones Firebase. Firestore es una base de datos NoSQL (No Relacional) que se utiliza para almacenar y sincronizar datos en aplicaciones web y móviles en tiempo real.

    Firestore utiliza un modelo de datos basado en documentos, donde los datos se almacenan en forma de documentos, que son conjuntos de pares clave-valor. Los documentos se organizan en colecciones, que son grupos de documentos que pueden contener cualquier tipo de datos. A diferencia de las bases de datos SQL, Firestore no utiliza tablas y no tiene esquemas fijos, lo que permite una mayor flexibilidad en la estructura de datos. 


##### Diseño y experiencia de usuario: 
Flujo de compra intuitivo: el proceso de compra está diseñado de manera intuitiva y fácil de entender para los usuarios. Esto implica una navegación clara y sencilla desde la selección del vino hasta el pago, con un flujo lógico y sin complicaciones.

Diseño atractivo y agradable: el diseño visual del sitio web, incluyendo la paleta de colores, las imágenes y las tipografías, se ha optimizado para crear una experiencia atractiva y agradable para los usuarios. Un diseño visual atractivo puede contribuir a una experiencia de compra más placentera.

Facilidad de búsqueda y filtrado: se ha optimizado la búsqueda y el filtrado de los vinos en el sitio web, permitiendo a los usuarios encontrar fácilmente los productos que buscan. Desde la barra de navegación se accede directamente al varietal buscado para ello se emplearon funciones de Javascript que realizan filtros por categorías.

Responsive design: este sitio web está optimizado para dispositivos móviles, lo que permite a los usuarios comprar vinos de forma fácil y conveniente en cualquier dispositivo, ya sea un ordenador de escritorio, una tableta o un smartphone.







