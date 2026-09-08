import { procesarValidacionFormulario} from './ejercicios/index.js';

// Datos de entrada 1: Usuario con datos correctos
const datosUsuarioValido = {
  correo: "juan.perez@email.com",
  documento: "1020304050",
  usuario: "jperez2026"
};

// Tiempos simulados de respuesta para cada servicio externo (en milisegundos)
const tiemposServicios = {
  correo: 1500,
  documento: 800,
  usuario: 1200
};

// Función ejecutora con async/await
const iniciarValidacion = async () => {
  const reporte = await procesarValidacionFormulario(datosUsuarioValido, tiemposServicios);

  console.log("=== INFORME DE VALIDACIÓN ===");
  console.log(`Estado Correo:    [${reporte.estadoValidaciones.correo.estado}] - ${reporte.estadoValidaciones.correo.detalle}`);
  console.log(`Estado Documento: [${reporte.estadoValidaciones.documento.estado}] - ${reporte.estadoValidaciones.documento.detalle}`);
  console.log(`Estado Usuario:   [${reporte.estadoValidaciones.usuario.estado}] - ${reporte.estadoValidaciones.usuario.detalle}`);
  
  console.log("\n-------------------------------------------");
  console.log(`RESULTADO FINAL: ${reporte.resultadoFinal}`);
  console.log(`TIEMPO TOTAL DEL PROCESO: ${reporte.tiempoTotal} ms`);
  console.log("-------------------------------------------");
};

iniciarValidacion();