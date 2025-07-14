// Este script se debe vincular desde index.html con: <script src="script.js"></script>

// Malla curricular interactiva - Literaturas Hispánicas UNISON
// Datos obtenidos del mapa curricular y del kardex del estudiante

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const materias = [
  // Semestre I
  { nombre: "Estrategias para Aprender a Aprender", creditos: 3, estado: "reprobada", calificacion: 50, semestre: 1 },
  { nombre: "Introducción a los Estudios Literarios", creditos: 8, estado: "reprobada", calificacion: 0, semestre: 1 },
  { nombre: "Literatura Clásica Griega", creditos: 8, estado: "reprobada", calificacion: 54, semestre: 1 },
  { nombre: "Español Superior I", creditos: 8, estado: "aprobada", calificacion: 92, semestre: 1 },
  { nombre: "Taller de Redacción I", creditos: 5, estado: "aprobada", calificacion: 95, semestre: 1 },
  { nombre: "Características de la Sociedad Actual", creditos: 3, estado: "reprobada", calificacion: 50, semestre: 1 },

  // Semestre II
  { nombre: "Instrumentos para el Estudio Literario", creditos: 8, estado: "aprobada", calificacion: 70, semestre: 2 },
  { nombre: "Literatura Clásica Latina", creditos: 8, estado: "reprobada", calificacion: 52, semestre: 2 },
  { nombre: "Español Superior II", creditos: 8, estado: "aprobada", calificacion: 98, semestre: 2 },
  { nombre: "Taller de Redacción II", creditos: 5, estado: "aprobada", calificacion: 70, semestre: 2 },
  { nombre: "Latín I", creditos: 8, estado: "aprobada", calificacion: 85, semestre: 2 },
  { nombre: "Ética y Desarrollo Profesional", creditos: 3, estado: "aprobada", calificacion: 100, semestre: 2 },

  // Semestre III
  { nombre: "Panorama de la Literatura de la Tradición Occidental", creditos: 8, estado: "reprobada", calificacion: 50, semestre: 3 },
  { nombre: "Literatura Española Medieval y del Renacimiento", creditos: 8, estado: "aprobada", calificacion: 65, semestre: 3 },
  { nombre: "Literatura Precolombina y Crónicas", creditos: 8, estado: "aprobada", calificacion: 90, semestre: 3 },
  { nombre: "Taller de Composición: Narrativa", creditos: 6, estado: "reprobada", calificacion: 50, semestre: 3 },
  { nombre: "Introducción General al Estudio del Lenguaje", creditos: 8, estado: "aprobada", calificacion: 65, semestre: 3 },
  { nombre: "Latín II", creditos: 8, estado: "aprobada", calificacion: 90, semestre: 3 },
  { nombre: "Español Superior III", creditos: 8, estado: "aprobada", calificacion: 75, semestre: 3 },

  // Semestre IV
  { nombre: "Literatura Española del Barroco al Romanticismo", creditos: 8, estado: "aprobada", calificacion: 57, semestre: 4 },
  { nombre: "Literatura Hispanoamericana Siglos XVII y XVIII", creditos: 8, estado: "aprobada", calificacion: 100, semestre: 4 },
  { nombre: "Lingüística y Literatura", creditos: 8, estado: "aprobada", calificacion: 80, semestre: 4 },
  { nombre: "Corrección de Estilo y Retórica", creditos: 6, estado: "aprobada", calificacion: 70, semestre: 4 },
  { nombre: "Taller de Composición: Lírica y Dramática", creditos: 6, estado: "aprobada", calificacion: 75, semestre: 4 },
  { nombre: "Nuevas Tecnologías de la Información y la Comunicación", creditos: 3, estado: "aprobada", calificacion: 51, semestre: 4 },

  // Semestre V
  { nombre: "Introducción a la Semántica y Pragmática", creditos: 8, estado: "pendiente", calificacion: null, semestre: 5 },
  { nombre: "Literatura Extranjera del Realismo a las Vanguardistas", creditos: 8, estado: "pendiente", calificacion: null, semestre: 5 },
  { nombre: "Literatura Hispanoamericana del Siglo XIX", creditos: 8, estado: "pendiente", calificacion: null, semestre: 5 },
  { nombre: "Literatura Española del Barroco Pleno al Romanticismo", creditos: 8, estado: "pendiente", calificacion: null, semestre: 5 },
  { nombre: "Literatura Mexicana (1805-1880)", creditos: 8, estado: "pendiente", calificacion: null, semestre: 5 },
  { nombre: "Optativa", creditos: 8, estado: "pendiente", calificacion: null, semestre: 5 },

  // Semestre VI
  { nombre: "Literatura Hispanoamericana del Modernismo a las Vanguardias", creditos: 8, estado: "pendiente", calificacion: null, semestre: 6 },
  { nombre: "Literatura Mexicana (1880–1940)", creditos: 8, estado: "pendiente", calificacion: null, semestre: 6 },
  { nombre: "Literatura Española: del Realismo hasta la Actualidad", creditos: 8, estado: "pendiente", calificacion: null, semestre: 6 },
  { nombre: "Seminario de Investigación y Tesis", creditos: 8, estado: "pendiente", calificacion: null, semestre: 6 },
  { nombre: "Didáctica de la Lengua y la Literatura: Métodos y Prácticas", creditos: 8, estado: "pendiente", calificacion: null, semestre: 6 },
  { nombre: "Optativa", creditos: 8, estado: "pendiente", calificacion: null, semestre: 6 },

  // Semestre VII
  { nombre: "Teorías Formalistas de la Literatura", creditos: 8, estado: "pendiente", calificacion: null, semestre: 7 },
  { nombre: "Literatura Mexicana de la Revolución y Posvanguardias", creditos: 8, estado: "pendiente", calificacion: null, semestre: 7 },
  { nombre: "Literatura Hispanoamericana Contemporánea", creditos: 8, estado: "pendiente", calificacion: null, semestre: 7 },
  { nombre: "Didáctica de la Lengua y la Literatura: Teorías y Contenidos", creditos: 8, estado: "pendiente", calificacion: null, semestre: 7 },
  { nombre: "Optativa", creditos: 8, estado: "pendiente", calificacion: null, semestre: 7 },
  { nombre: "Optativa", creditos: 8, estado: "pendiente", calificacion: null, semestre: 7 },

  // Semestre VIII
  { nombre: "Teoría de la Interpretación Literaria", creditos: 8, estado: "pendiente", calificacion: null, semestre: 8 },
  { nombre: "Literatura Mexicana Contemporánea", creditos: 8, estado: "pendiente", calificacion: null, semestre: 8 },
  { nombre: "Literatura y Cultura Fronteriza", creditos: 8, estado: "pendiente", calificacion: null, semestre: 8 },
  { nombre: "Optativa", creditos: 8, estado: "pendiente", calificacion: null, semestre: 8 },

  // Otros
  { nombre: "Servicio Social", creditos: 10, estado: "pendiente", calificacion: null, semestre: 8 },
  { nombre: "Actividades Culturales y Deportivas", creditos: 2, estado: "pendiente", calificacion: null, semestre: 8 }
];

const estados = {
  aprobada: "reprobada",
  reprobada: "pendiente",
  pendiente: "aprobada"
};

function crearMalla() {
  const root = document.getElementById("root");
  const modoOscuroGuardado = localStorage.getItem("modoOscuro") === "true";
  let modoOscuro = modoOscuroGuardado;

  const container = document.createElement("div");
  container.className = "p-6 space-y-4 min-h-screen";
  container.style.backgroundColor = modoOscuro ? "#1e1e1e" : "#f4f4f0";
  container.style.color = modoOscuro ? "white" : "black";

  const encabezado = document.createElement("div");
  encabezado.className = "flex justify-between items-center mb-4";

  const titulo = document.createElement("h1");
  titulo.className = "text-3xl font-bold";
  titulo.textContent = "Malla Curricular LLH - UNISON";

  const btnModo = document.createElement("button");
  btnModo.className = "px-4 py-2 rounded-lg bg-gray-200 text-sm";
  btnModo.textContent = modoOscuro ? "🌞 Modo claro" : "🌙 Modo oscuro";
  btnModo.onclick = () => {
    modoOscuro = !modoOscuro;
    localStorage.setItem("modoOscuro", modoOscuro);
    location.reload(); // recarga con el nuevo modo
  };

  encabezado.appendChild(titulo);
  encabezado.appendChild(btnModo);
  container.appendChild(encabezado);

  for (let semestre = 1; semestre <= 8; semestre++) {
    const bloque = document.createElement("div");
    bloque.className = "rounded-lg p-4 mb-4 shadow-md";
    bloque.style.backgroundColor = pastelColor(semestre);

    const h2 = document.createElement("h2");
    h2.className = "text-xl font-semibold mb-2";
    h2.textContent = `Semestre ${semestre}`;
    bloque.appendChild(h2);

    const grid = document.createElement("div");
    grid.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4";

    materias
      .filter((m) => m.semestre === semestre)
      .forEach((m, index) => {
        const card = document.createElement("div");
        card.className = `card ${m.estado}`;
        card.style.cursor = "pointer";
        card.style.backgroundColor = estadoColor(m.estado);
        card.style.borderRadius = "12px";
        card.style.padding = "10px";

        card.innerHTML = `<strong>${m.nombre}</strong><br>Créditos: ${m.creditos}<br>Estado: ${m.estado}${
          m.calificacion !== null ? `<br>Calificación: ${m.calificacion}` : ""
        }`;

        card.onclick = () => {
          m.estado = estados[m.estado];
          render();
        };

        grid.appendChild(card);
      });

    bloque.appendChild(grid);
    container.appendChild(bloque);
  }

  // Cálculo de progreso y promedio
  const total = materias.reduce((sum, m) => sum + m.creditos, 0);
  const completados = materias
    .filter((m) => m.estado === "aprobada")
    .reduce((sum, m) => sum + m.creditos, 0);
  const avance = Math.round((completados / total) * 100);

  const calif = materias.filter((m) => typeof m.calificacion === "number");
  const promedio =
    calif.length > 0
      ? (calif.reduce((a, m) => a + m.calificacion, 0) / calif.length).toFixed(2)
      : "--";

  const stats = document.createElement("div");
  stats.innerHTML = `
    <h2 class="text-xl font-bold">Porcentaje de Avance</h2>
    <div style="background:#ddd;width:100%;height:20px;border-radius:10px;overflow:hidden">
      <div style="background:#22c55e;width:${avance}%;height:100%"></div>
    </div>
    <p>${avance}% completado (${completados} de ${total} créditos)</p>
    <h2 class="text-xl font-bold mt-4">Promedio Actual: ${promedio}</h2>
    <h3 class="text-lg">Meta: 95</h3>
  `;

  container.appendChild(stats);
  root.innerHTML = "";
  root.appendChild(container);
}

function pastelColor(n) {
  const colores = [
    "#fce7f3", "#e0f2fe", "#ede9fe", "#d1fae5",
    "#fff7ed", "#fef9c3", "#fae8ff", "#e0fce7"
  ];
  return colores[(n - 1) % colores.length];
}

function estadoColor(estado) {
  return estado === "aprobada"
    ? "#d1fae5"
    : estado === "reprobada"
    ? "#fee2e2"
    : "#fef9c3";
}

function render() {
  crearMalla();
}

render();



