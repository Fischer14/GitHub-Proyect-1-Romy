// Se define una función "getPosts". Esta función se encargará de realizar la solicitud a la API y mostrar los primeros tres posts en el sitio web.

const getPosts = () => {

//  Utilizamos una función fetch() para hacer la solicitud GET a la URL especificada, que es la API de JSONPlaceholder. 

    fetch("https://jsonplaceholder.typicode.com/posts")

// Encadenamos un "then" para convertir la respuesta obtenida en un formato JSON. "response.json()" devuelve la promesa que se resuelve con los datos JSON de la respuesta.

      .then((response) => response.json())

// Encadenamos otro "then" para manejar los datos obtenidos de la respuesta JSON. Dentro de este bloque de código, se realiza un bucle "for" para iterar sobre los primeros tres elementos de la lista de publicaciones.

      .then((res) => {
        for (let i = 0; i < 3; i++) {

// Accedemos al elemento del documento HTML que tiene la clase "projects-container" utilizando document.querySelector. Luego, modificamos su contenido interno (innerHTML) para agregar dinámicamente una sección de proyecto por cada uno de los tres primeros posts obtenidos de la API. La sintaxis += se utiliza para agregar contenido sin sobrescribir el existente.
         
            document.querySelector(
            ".projects-container"
          ).innerHTML += `<div class="project">
              <img src="./resources/images/projects-section/${res[i].id}.jpg" alt="Abstract Image">
              <h3>${res[i].title}</h3>
              <p>${res[i].body}</p>
              <a href="project.html?p=${res[i].id}">Learn More</a>
              </div>`;
        }

// Se crea una nueva sección de proyecto utilizando una plantilla de cadena de texto (template string) para generar el código HTML necesario.

      })
      .catch((error) => console.log(error));
  };
  

  // Agrega un evento de escucha para el evento "load" del objeto window (ventana del navegador). Cuando se carga completamente la página, se llama a la función get3posts, lo que inicia el proceso de obtener los primeros tres posts y mostrarlos en el sitio web.

  window.addEventListener("load", getPosts);
  