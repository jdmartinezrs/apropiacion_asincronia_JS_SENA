/**
 * 3. Validación de un formulario con múltiples verificaciones externas
Enunciado
Un sistema debe validar un formulario realizando tres verificaciones asincrónicas:
1. Validar correo en un servicio externo.
2. Validar documento en una base remota.
3. Validar disponibilidad del usuario en un registro global.

GFPI-F-135 V04

Las tres validaciones pueden ocurrir en paralelo, pero el sistema solo puede continuar si
todas responden satisfactoriamente.
Requerimientos
• Ejecutar las validaciones en paralelo.
• Capturar errores individuales y globales.
• Consolidar un objeto con los estados de validación.
• Medir el tiempo total del proceso.
Datos de entrada
• Datos básicos del usuario (correo, documento, nombre).
• Tiempos simulados de respuesta de cada verificación.
Datos de salida
• Estado individual de cada validación.
• Resultado final: “Formulario validado” o “Validación fallida”.
• Tiempo total del proceso.
 */

// Simulación de validación de correo
const validarCorreo = (correo, tiempo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (correo.indexOf("@") !== -1) {
        resolve("Correo verificado correctamente.");
      } else {
        reject("Correo no válido: Falta el símbolo '@'.");
      }
    }, tiempo);
  });
};

// Simulación de validación de documento en base remota
const validarDocumento = (documento, tiempo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (documento.length >= 8) {
        resolve("Documento verificado en la base remota.");
      } else {
        reject("Documento no válido: Debe tener al menos 8 dígitos.");
      }
    }, tiempo);
  });
};

// Simulación de disponibilidad de usuario en registro global
const validarDisponibilidadUsuario = (usuario, tiempo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usuario !== "admin") {
        resolve("Nombre de usuario disponible.");
      } else {
        reject("Usuario no disponible: El nombre ya está ocupado.");
      }
    }, tiempo);
  });
};

// Envoltorio individual para capturar el estado (exitoso o fallido) sin tumbar las demás promesas
const ejecutarVerificacion = async (fnValidacion, valor, tiempo) => {
  try {
    const mensaje = await fnValidacion(valor, tiempo);
    return { estado: "Aprobado", detalle: mensaje };
  } catch (error) {
    return { estado: "Rechazado", detalle: error };
  }
};

// Función principal que ejecuta las validaciones en paralelo con async/await
export const procesarValidacionFormulario = async (datosFormulario, tiemposSimulados) => {
  console.log("=== INICIANDO VERIFICACIONES EXTERNAS EN PARALELO ===\n");

  const tiempoInicio = Date.now();

  // Se lanzan las 3 promesas en paralelo
  const promesas = [
    ejecutarVerificacion(validarCorreo, datosFormulario.correo, tiemposSimulados.correo),
    ejecutarVerificacion(validarDocumento, datosFormulario.documento, tiemposSimulados.documento),
    ejecutarVerificacion(validarDisponibilidadUsuario, datosFormulario.usuario, tiemposSimulados.usuario)
  ];

  // Se esperan las 3 validaciones de forma simultánea
  const resultados = await Promise.all(promesas);

  const tiempoTotal = Date.now() - tiempoInicio;

  // Consolidar el objeto con los estados individuales
  const estadoValidaciones = {
    correo: resultados[0],
    documento: resultados[1],
    usuario: resultados[2]
  };

  // Evaluar si TODAS las validaciones fueron aprobadas
  let formularioAprobado = true;
  for (let i = 0; i < resultados.length; i++) {
    if (resultados[i].estado !== "Aprobado") {
      formularioAprobado = false;
    }
  }

  const resultadoFinal = formularioAprobado ? "Formulario validado" : "Validación fallida";

  return {
    estadoValidaciones,
    resultadoFinal,
    tiempoTotal
  };
};