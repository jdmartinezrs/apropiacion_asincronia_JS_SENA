import {integrarServiciosUsuario} from './ejercicios/index.js';

// Configuración de prueba
const usuarioId = "USR-9942";

// Tiempos simulados por cada servicio (en milisegundos)
const tiemposServicios = {
  servicioA: 1000,
  servicioB: 1500,
  servicioC: 800,
  servicioD: 1200
};

// Flags de fallo para probar tolerancia y manejo de errores aislados
const fallasSimuladas = {
  servicioA: false,
  servicioB: false, // Si cambias B o C a true, D se cancelará automáticamente
  servicioC: false,
  servicioD: false
};

const iniciar = async () => {
  const reporte = await integrarServiciosUsuario(usuarioId, tiemposServicios, fallasSimuladas);

  console.log("=== INFORME FINAL UNIFICADO ===");
  console.log(`Usuario ID:    ${reporte.usuarioId}`);
  console.log(`Estado Global: ${reporte.estadoGlobal}`);
  console.log(`Tiempo Total:  ${reporte.tiempoTotal} ms\n`);

  console.log("--- Tiempos y Estado Individual por Servicio ---");
  const lista = [
    reporte.servicios.servicioA,
    reporte.servicios.servicioB,
    reporte.servicios.servicioC,
    reporte.servicios.servicioD
  ];

  for (let i = 0; i < lista.length; i++) {
    const s = lista[i];
    if (s.exito) {
      console.log(`  ✔ [${s.servicio}] -> ${s.tiempo} ms | Respuesta: ${s.datos}`);
    } else {
      console.log(`  ✖ [${s.servicio}] -> ${s.tiempo} ms | Error: ${s.error}`);
    }
  }

  console.log("\n--- Orden Real de Finalización de Servicios ---");
  for (let i = 0; i < reporte.ordenFinalizacion.length; i++) {
    const item = reporte.ordenFinalizacion[i];
    console.log(`  ${i + 1}°. ${item.servicio} (${item.tiempo} ms) - ${item.exito ? 'Éxito' : 'Fallo'}`);
  }
};

iniciar();