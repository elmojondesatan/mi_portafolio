export function herramientas() {
    const section = document.createElement("section");
  
    const title = document.createElement("h2");
    title.textContent = "Herramientas";
  
    const list = document.createElement("ul");
    ["VS Code", "Git", "Linux", "Figma"].forEach(tool => {
      const li = document.createElement("li");
      li.textContent = tool;
      list.appendChild(li);
    });
  
    section.appendChild(title);
    section.appendChild(list);
    return section;
  }
  