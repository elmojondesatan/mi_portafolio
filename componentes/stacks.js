export function stacks() {
    const section = document.createElement("section");
  
    const title = document.createElement("h2");
    title.textContent = "Stacks";
  
    const list = document.createElement("ul");
    ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"].forEach(stack => {
      const li = document.createElement("li");
      li.textContent = stack;
      list.appendChild(li);
    });
  
    section.appendChild(title);
    section.appendChild(list);
    return section;
  }
  