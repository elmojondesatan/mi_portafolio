export function header() {
    const section = document.createElement("section");
    section.classList.add("hero");
  
    const img = document.createElement("img");
    img.src = "https://images.seeklogo.com/logo-png/29/1/stussy-logo-png_seeklogo-298267.png"; // aquí pones tu foto luego
  
    const title = document.createElement("h1");
    title.textContent = "Sobre mí";
  
    const desc = document.createElement("p");
    desc.textContent = "Hola, me llamo Diego y me apasiona diseñar y desarrollar páginas web. Disfruto creando interfaces atractivas y funcionales, explorando diferentes estilos y tecnologías para que cada proyecto tenga su propio toque único. Además, me gusta combinar mi interés por la creatividad visual con la programación, haciendo que mis diseños no solo se vean bien, sino que también sean interactivos y fáciles de usar.";
  
    section.appendChild(img);
    section.appendChild(title);
    section.appendChild(desc);
  
    return section;
  }
  