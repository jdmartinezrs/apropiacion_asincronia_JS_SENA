/*
1. Gestión de una cola de atención
Enunciado
Un módulo de soporte registra solicitudes de usuarios. Cada solicitud tarda un tiempo
distinto en ser atendida. Aunque el sistema atiende cada solicitud por turno (una a la vez),
el aprendiz debe simular el tiempo de espera, registrar el orden de atención y calcular la
duración total del proceso.
Requerimientos
• Procesar solicitudes de manera secuencial.
• Registrar inicio y fin de cada atención.
• Identificar el tiempo total del proceso.
• Usar asincronía controlada (callback, promesa o async/await).
Datos de entrada
• Lista de usuarios con un tiempo estimado de atención.
Datos de salida
• Orden real de atención.
• Tiempo de atención por usuario.
• Tiempo total del proceso.
*/
// Simulación de una entrega usando Promesa estándar con Executor

// Simulación de una entrega usando Promesa estándar con Executor
const entregarPaquete = (paquete, ordenFinalizacion) => {
  return new Promise((resolve, reject) => {
    console.log(`[SALIDA] Paquete ${paquete.id} en camino...`);

    setTimeout(() => {
      if (paquete.falla) {
        reject(`Error en paquete ${paquete.id}: Dirección no encontrada.`);
      } else {
        ordenFinalizacion[ordenFinalizacion.length] = paquete.id;
        console.log(`[LLEGADA] Paquete ${paquete.id} entregado en ${paquete.tiempo}ms.`);
        
        resolve({
          id: paquete.id,
          exito: true,
          tiempo: paquete.tiempo
        });
      }
    }, paquete.tiempo);
  });
};

// Función asíncrona individual que captura errores con try/catch
const gestionarEntregaSegura = async (paquete, ordenFinalizacion) => {
  try {
    const resultado = await entregarPaquete(paquete, ordenFinalizacion);
    return resultado;
  } catch (error) {
    return {
      id: paquete.id,
      exito: false,
      mensajeError: error
    };
  }
};

// Ejecución global en paralelo
export const procesarEntregasParalelo = async (listaPaquetes) => {
  console.log("=== INICIANDO ENTREGAS SIMULTÁNEAS ===\n");

  const ordenFinalizacion = [];
  const promesas = [];

  // Se detona la ejecución de todas las entregas en paralelo
  for (let i = 0; i < listaPaquetes.length; i++) {
    promesas[i] = gestionarEntregaSegura(listaPaquetes[i], ordenFinalizacion);
  }

  // Promise.all procesa las promesas de forma segura porque ninguna será rechazada
  const resultados = await Promise.all(promesas);

  return {
    resultados,
    ordenFinalizacion
  };
};