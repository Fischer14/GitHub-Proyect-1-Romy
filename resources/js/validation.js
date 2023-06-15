// Definimos una funcion llamada "validateForm" qie se encarga de enivar el fromualrio y manejar la respuesta.

// Función de validación del formulario
    const validateForm = (event) => {
      event.preventDefault();

// Obtener los valores de los campos del formulario
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      
// Verificar si el nombre es igual a "ironhack"
      if (name.toLowerCase() === "ironhack") {
        alert("Usted no puede ser Ironhack, porque yo soy Ironhack");
        return;
      }

// Verificar si el correo electrónico es válido
      if (!isValidEmail(email)) {
        alert("Correo electrónico incorrecto");
        return;
      }

// Validación exitosa, enviar el formulario
      document.getElementById("form-message").submit();
    };

// Función de validación del correo electrónico
    const isValidEmail = (email) => {
        
// Utiliza una expresión regular simple para validar el formato del correo electrónico
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

// Agregar el evento de escucha al formulario
    document.getElementById("form-message").addEventListener("submit", validateForm);


// Hacer que todos los campos del formulario de contacto sean obligatorios antes de poder enviarlo

// Función de validación del formulario de contacto
    const validateContactForm = (event) => {
        event.preventDefault();
  
// Obtener los valores de los campos del formulario
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;
  
// Verificar si algún campo está vacío
        if (!name || !email || !phone || !message) {
          alert("Por favor, complete todos los campos obligatorios");
          return;
        }
  
// Validación exitosa, enviar el formulario
        document.getElementById("contact-form").submit();
      };
  
// Agregar el evento de escucha al formulario de contacto
      document.getElementById("contact-form").addEventListener("submit", validateContactForm);