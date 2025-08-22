export function proyectos() {
    const section = document.createElement("section");
    section.classList.add("proyectos-section");
  
    const title = document.createElement("h2");
    title.textContent = "Proyectos";
  
    const container = document.createElement("div");
    container.classList.add("proyectos-container");
  
    // 📌 lista de proyectos con 2 enlaces
    const dataProyectos = [
      { 
        titulo: "Juego Ahorcado", 
        demo: "https://elmojondesatan.github.io/juegos_place/", 
        repo: "https://github.com/elmojondesatan/juegos_place",
        descripcion: "Este proyecto consiste en una versión interactiva y dinámica del clásico juego del ahorcado, desarrollado con JavaScript, HTML y CSS. El jugador debe adivinar palabras ocultas letra por letra antes de que se agoten sus vidas. A diferencia de la versión tradicional."
      },
      { 
        titulo: "Semaforo", 
        demo: "https://elmojondesatan.github.io/semaforo-rocky/", 
        repo: "https://github.com/elmojondesatan/semaforo-rocky",
        descripcion: "Este proyecto es un semáforo inteligente con Raspberry Pi, controlado desde un backend en Thonny (Python). Incluye un sensor DHT11 que mide la temperatura y humedad, y un sistema de LEDs que simulan los colores de un semáforo, permitiendo ver su estado en tiempo real. Combina hardware y software para mostrar cómo integrar sensores y actuadores en un entorno práctico y funcional."
      },
      {
      titulo: "Rompecabezas", 
        demo: "https://elmojondesatan.github.io/rompe_cabezas/", 
        repo: "https://github.com/elmojondesatan/rompe_cabezas",
        descripcion: "Este proyecto es un juego de rompecabezas de frutas para niños, creado con JavaScript, HTML y CSS. Los jugadores deben unir las piezas para completar imágenes, fomentando coordinación y concentración. Incluye niveles progresivos, temporizador y puntuación, con un diseño colorido y atractivo que combina diversión y aprendizaje visual."
      }
    ];
  
    // 📌 contenedor de botones
    const btnsContainer = document.createElement("div");
    btnsContainer.classList.add("proyectos-botones");
  
    // 📌 contenedor de descripción
    const descContainer = document.createElement("div");
    descContainer.classList.add("proyectos-descripcion");
    descContainer.textContent = "Selecciona un proyecto para ver la descripción.";
  
    // Crear botones dinámicos
    dataProyectos.forEach(proy => {
      const card = document.createElement("div");
      card.classList.add("proyecto-card");
  
      const titulo = document.createElement("h3");
      titulo.textContent = proy.titulo;
  
      const btnDemo = document.createElement("button");
      btnDemo.textContent = "Ver pagina";
      btnDemo.classList.add("proyecto-btn");
      btnDemo.addEventListener("click", () => {
        descContainer.textContent = proy.descripcion;
        window.open(proy.demo, "_blank");
      });
  
      const btnRepo = document.createElement("button");
      btnRepo.textContent = "Repositorio";
      btnRepo.classList.add("proyecto-btn");
      btnRepo.addEventListener("click", () => {
        descContainer.textContent = proy.descripcion;
        window.open(proy.repo, "_blank");
      });
  
      card.appendChild(titulo);
      card.appendChild(btnDemo);
      card.appendChild(btnRepo);
  
      btnsContainer.appendChild(card);
    });
  
    container.appendChild(btnsContainer);
    container.appendChild(descContainer);
  
    section.appendChild(title);
    section.appendChild(container);
  
    return section;
  }
  