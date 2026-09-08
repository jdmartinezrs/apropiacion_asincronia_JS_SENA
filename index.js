import { procesarCola } from './ejercicios/index.js';

// Datos de entrada
const usuarios = [
  { nombre: "Carlos Gómez", tiempo: 2000 },
  { nombre: "María Rodríguez", tiempo: 1000 },
  { nombre: "Juan Pérez", tiempo: 1500 }
];

// Función principal con async/await
const iniciarSistema = async () => {
  const resultado = await procesarCola(usuarios);

  console.log("\n=== REPORTE FINAL DE ATENCIÓN ===");
  console.log("Orden real y tiempo de atención por usuario:");

  // Recorrido por índice 
  for (let i = 0; i < resultado.ordenAtencion.length; i++) {
    const item = resultado.ordenAtencion[i];
    console.log(`  ${i + 1}. ${item.nombre} - ${item.tiempo} ms`);
  }

  console.log(`\nTiempo total del proceso: ${resultado.tiempoTotal} ms`);
};

iniciarSistema();