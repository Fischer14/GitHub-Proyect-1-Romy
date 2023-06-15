const loaderEject = () => {
    window.onload = () => {
      setTimeout(() => {
        const contenedor = document.querySelector(".loader-container");
        contenedor.style.visibility = "hidden";
        contenedor.style.opacity = "0";
      }, 1000);
    };
  };
  loaderEject();