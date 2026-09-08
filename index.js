import {procesarPedido} from './ejercicios/index.js';

// Caso 1: Pedido procesado con éxito
const pedidoCorrecto = {
  id: "PED-101",
  tiempos: {
    stock: 1000,
    costos: 1200,
    recomendaciones: 3000, // Tarda más, pero corre en paralelo sin bloquear
    factura: 800
  },
  fallas: {
    stock: false,
    costos: false,
    recomendaciones: false,
    factura: false
  }
};

const iniciar = async () => {
  const reporte = await procesarPedido(
    pedidoCorrecto.id,
    pedidoCorrecto.tiempos,
    pedidoCorrecto.fallas
  );

  console.log("=== FLUJO REAL DE EJECUCIÓN Y FINALIZACIÓN ===");
  for (let i = 0; i < reporte.flujoEjecucion.length; i++) {
    console.log(`  ${i + 1}. ${reporte.flujoEjecucion[i]}`);
  }

  console.log("\n=== RESULTADOS INDIVIDUALES ===");
  console.log(`  • Stock:           ${reporte.resultados.stock?.detalle}`);
  console.log(`  • Costos:          ${reporte.resultados.costos?.detalle}`);
  console.log(`  • Recomendación:   ${reporte.resultados.recomendaciones?.detalle}`);
  console.log(`  • Factura:         ${reporte.resultados.factura?.detalle || "No generada"}`);

  console.log("\n===========================================");
  if (reporte.exitoGeneral) {
    console.log(`ESTADO: Proceso Exitoso.`);
    console.log(`DOCUMENTO: ${reporte.facturaGenerada}`);
  } else {
    console.log(`ESTADO: ${reporte.errorSistema}`);
    console.log(`DOCUMENTO: Error del sistema (Factura no generada).`);
  }
  console.log("===========================================");
};

iniciar();