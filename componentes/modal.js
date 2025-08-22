export function modal(texto) {
    const modal = document.createElement("div");
    modal.classList.add("modal", "active");
  
    const content = document.createElement("div");
    content.classList.add("modal-content");
  
    const p = document.createElement("p");
    p.textContent = texto;
  
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Cerrar";
    closeBtn.addEventListener("click", () => modal.remove());
  
    content.appendChild(p);
    content.appendChild(closeBtn);
    modal.appendChild(content);
  
    return modal;
  }
  