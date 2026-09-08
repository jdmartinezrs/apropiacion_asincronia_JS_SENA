/**
5. Integración de servicios: disponibilidad, datos del usuario, historial y
recomendaciones
Enunciado
Un sistema central debe preparar la información de un usuario consultando cuatro
servicios externos:
1. Servicio A: disponibilidad de un recurso.
2. Servicio B: información detallada del usuario.
3. Servicio C: historial de acciones.
4. Servicio D: motor de recomendaciones (depende de la información de los servicios
B y C).
El aprendiz debe simular todo el flujo utilizando asincronía avanzada, integrando procesos
dependientes y paralelos, registrando tiempo, orden y validaciones.
Requerimientos
• Ejecutar varios servicios en paralelo.
• Controlar dependencias del servicio D.
• Generar informe final unificado.
• Registrar tiempo total y tiempo por servicio.
• Manejar errores tanto aislados como globales.
Datos de entrada
• ID del usuario.
• Tiempo simulado por cada servicio.
• Parámetro que indica si algún servicio debe fallar (para evaluar manejo de errores).
Datos de salida

 */

// Simulación de un servicio externo con control de tiempo y fallas
const consultarServicio = (nombreServicio, tiempo, debeFallar = false, datosDependientes = null) => {
  return new Promise((resolve, reject) => {
    const tiempoInicio = Date.now();

    setTimeout(() => {
      const duracion = Date.now() - tiempoInicio;

      if (debeFallar) {
        reject({
          servicio: nombreServicio,
          tiempo: duracion,
          error: `Error de conexión en ${nombreServicio}`
        });
      } else {
        resolve({
          servicio: nombreServicio,
          tiempo: duracion,
          datos: datosDependientes ? `Recomendaciones basadas en [${datosDependientes}]` : `Datos de ${nombreServicio}`
        });
      }
    }, tiempo);
  });
};

// Envoltorio para capturar errores aislados sin detener el flujo general
const consultarServicioSeguro = async (nombreServicio, tiempo, debeFallar, datosDependientes = null) => {
  try {
    const respuesta = await consultarServicio(nombreServicio, tiempo, debeFallar, datosDependientes);
    return { exito: true, ...respuesta };
  } catch (err) {
    return { exito: false, ...err };
  }
};

// Función principal de integración
export const integrarServiciosUsuario = async (usuarioId, tiempos, fallas = {}) => {
  console.log(`=== INICIANDO INTEGRACIÓN DE SERVICIOS - USUARIO: ${usuarioId} ===\n`);

  const tiempoInicioTotal = Date.now();
  const ordenFinalizacion = [];

  // Helper para registrar orden de llegada
  const registrarLlegada = (resultado) => {
    ordenFinalizacion[ordenFinalizacion.length] = {
      servicio: resultado.servicio,
      exito: resultado.exito,
      tiempo: resultado.tiempo
    };
    return resultado;
  };

  // 1. EJECUCIÓN EN PARALELO: Servicios A, B y C
  const promesaA = consultarServicioSeguro("Servicio A (Disponibilidad)", tiempos.servicioA, fallas.servicioA)
    .then(registrarLlegada);

  const promesaB = consultarServicioSeguro("Servicio B (Datos Usuario)", tiempos.servicioB, fallas.servicioB)
    .then(registrarLlegada);

  const promesaC = consultarServicioSeguro("Servicio C (Historial)", tiempos.servicioC, fallas.servicioC)
    .then(registrarLlegada);

  // Esperamos la resolución simultánea de los tres primeros servicios
  const [resA, resB, resC] = await Promise.all([promesaA, promesaB, promesaC]);

  // 2. CONTROL DE DEPENDENCIAS PARA EL SERVICIO D
  let resD = null;

  if (resB.exito && resC.exito) {
    console.log("-> Servicios B y C completados. Iniciando Servicio D (Recomendaciones)...\n");
    const contextoD = `${resB.datos} + ${resC.datos}`;
    
    resD = await consultarServicioSeguro(
      "Servicio D (Recomendaciones)",
      tiempos.servicioD,
      fallas.servicioD,
      contextoD
    );
    registrarLlegada(resD);
  } else {
    console.log("-> CANCELADO: Servicio D no puede ejecutarse porque el Servicio B o C falló.\n");
    resD = {
      servicio: "Servicio D (Recomendaciones)",
      exito: false,
      tiempo: 0,
      error: "Cancelado por falla en dependencias (Servicio B o C)"
    };
  }

  const tiempoTotal = Date.now() - tiempoInicioTotal;

  // 3. GENERACIÓN DEL INFORME UNIFICADO
  const informe = {
    usuarioId,
    tiempoTotal,
    ordenFinalizacion,
    servicios: {
      servicioA: resA,
      servicioB: resB,
      servicioC: resC,
      servicioD: resD
    },
    estadoGlobal: (resA.exito && resB.exito && resC.exito && resD.exito) ? "EXITOSO" : "PARCIAL_O_FALLIDO"
  };

  return informe;
};