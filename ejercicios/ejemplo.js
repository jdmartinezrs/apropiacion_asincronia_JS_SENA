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

// Retorna una promesa que simula la atención asíncrona
const atenderUsuario = (usuario) => {
  return new Promise((resolve) => {
    console.log(`[INICIO] Atendiendo a: ${usuario.nombre}...`);

    setTimeout(() => {
      console.log(`[FIN] Atendido: ${usuario.nombre} (${usuario.tiempo}ms)`);
      resolve(usuario.tiempo);
    }, usuario.tiempo);
  });
};

// Procesa la cola secuencialmente sin métodos
export const procesarCola = async (listaUsuarios) => {
  console.log("=== INICIANDO GESTIÓN DE LA COLA ===\n");

  const ordenAtencion = [];
  let tiempoTotal = 0;

  // Ciclo clásico 'for' en lugar de métodos de iteración
  for (let i = 0; i < listaUsuarios.length; i++) {
    const usuario = listaUsuarios[i];
    const tiempoAtencion = await atenderUsuario(usuario);

    // Asignación por índice directo sin usar .push()
    ordenAtencion[i] = {
      nombre: usuario.nombre,
      tiempo: tiempoAtencion
    };

    // Acumulador manual del tiempo total
    tiempoTotal += tiempoAtencion;
  }

  return {
    ordenAtencion,
    tiempoTotal
  };
};
