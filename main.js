import { header } from "./componentes/header.js";
import { herramientas } from "./componentes/herramientas.js";
import { stacks } from "./componentes/stacks.js";
import { proyectos } from "./componentes/proyectos.js";

export function DOM() {
  const root = document.getElementById("root");

  root.appendChild(header());
  root.appendChild(herramientas());
  root.appendChild(stacks());
  root.appendChild(proyectos());
}

DOM();
