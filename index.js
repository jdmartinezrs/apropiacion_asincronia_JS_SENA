import { procesarEntregasParalelo} from './ejercicios/index.js';

const paquetes = [
  { id: "PK-001", tiempo: 3000, falla: false },
  { id: "PK-002", tiempo: 1000, falla: false },
  { id: "PK-003", tiempo: 2000, falla: true  }, // Paquete que fallará
  { id: "PK-004", tiempo: 1500, falla: false }
];

const iniciarSistema = async () => {
  const informe = await procesarEntregasParalelo(paquetes);

  console.log("\n=== INFORMES Y RESUMEN FINAL ===");

  // 1. Mostrar orden real de finalización
  console.log("\nOrden real en que finalizaron exitosamente:");
  for (let i = 0; i < informe.ordenFinalizacion.length; i++) {
    console.log(`  ${i + 1}°. Paquete ${informe.ordenFinalizacion[i]}`);
  }

  // 2. Mostrar detalle consolidado
  console.log("\nResultado detallado de las entregas:");
  for (let i = 0; i < informe.resultados.length; i++) {
    const res = informe.resultados[i];

    if (res.exito) {
      console.log(`  ✔ [ÉXITO] ${res.id} - Entregado (${res.tiempo}ms)`);
    } else {
      console.log(`  ✖ [FALLO] ${res.mensajeError}`);
    }
  }
};

iniciarSistema();