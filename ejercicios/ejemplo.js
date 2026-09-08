/**
4. Procesamiento de pedidos con pasos obligatorios y opcionales
Enunciado
Un sistema de ventas debe procesar pedidos en el siguiente flujo:
1. Validar stock (obligatorio).
2. Calcular costos finales (obligatorio).
3. Generar recomendaciones al cliente (opcional).
4. Enviar factura electrónica (obligatorio, pero depende de los dos primeros pasos).
El aprendiz debe simular este proceso asincrónico controlando dependencias, tiempo de
ejecución y manejo de errores.
Requerimientos
• Control estricto del orden de pasos obligatorios.
• Permitir que la recomendación se procese en paralelo sin bloquear el flujo.
• Generar factura solo si los pasos obligatorios son exitosos.
• Mostrar el orden real de ejecución y finalización.
Datos de entrada
• ID del pedido.
• Tiempos estimados por cada proceso.
Datos de salida
• Resultados individuales.
• Flujo real de ejecución.
• Factura generada o error del sistema.
 */
// Función auxiliar para simular pasos asincrónicos
const ejecutarPaso = (nombrePaso, tiempo, debeFallar = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (debeFallar) {
        reject(`Fallo en el paso: ${nombrePaso}`);
      } else {
        resolve(`Completado: ${nombrePaso}`);
      }
    }, tiempo);
  });
};

// Módulo principal del flujo de pedidos
export const procesarPedido = async (pedidoId, tiempos, fallas = {}) => {
  console.log(`=== INICIANDO PROCESAMIENTO DEL PEDIDO: ${pedidoId} ===\n`);

  const flujoEjecucion = [];
  const resultados = {};
  
  // Función helper para registrar el orden exacto de finalización
  const registrarFin = (paso, mensaje) => {
    flujoEjecucion[flujoEjecucion.length] = `[FIN] ${paso} (${mensaje})`;
  };

  try {
    // 1. PASO OBLIGATORIO: Validar Stock
    flujoEjecucion[flujoEjecucion.length] = "[INICIO] Validar Stock";
    const resStock = await ejecutarPaso("Validar Stock", tiempos.stock, fallas.stock);
    resultados.stock = { exito: true, detalle: resStock };
    registrarFin("Validar Stock", resStock);

    // 2. PASO OPIONAL EN PARALELO: Recomendaciones (No se usa 'await' para no bloquear el flujo)
    flujoEjecucion[flujoEjecucion.length] = "[INICIO] Generar Recomendaciones (Opcional)";
    const promesaRecomendaciones = ejecutarPaso("Generar Recomendaciones", tiempos.recomendaciones, fallas.recomendaciones)
      .then((res) => {
        resultados.recomendaciones = { exito: true, detalle: res };
        registrarFin("Generar Recomendaciones", res);
      })
      .catch((err) => {
        resultados.recomendaciones = { exito: false, detalle: err };
        registrarFin("Generar Recomendaciones (ERROR)", err);
      });

    // 3. PASO OBLIGATORIO: Calcular Costos Finales
    flujoEjecucion[flujoEjecucion.length] = "[INICIO] Calcular Costos Finales";
    const resCostos = await ejecutarPaso("Calcular Costos Finales", tiempos.costos, fallas.costos);
    resultados.costos = { exito: true, detalle: resCostos };
    registrarFin("Calcular Costos Finales", resCostos);

    // 4. PASO OBLIGATORIO FINAL: Generar Factura Electrónica
    // (Solo se ejecuta si los dos pasos anteriores no lanzaron excepciones)
    flujoEjecucion[flujoEjecucion.length] = "[INICIO] Generar Factura Electrónica";
    const resFactura = await ejecutarPaso("Generar Factura Electrónica", tiempos.factura, fallas.factura);
    resultados.factura = { exito: true, detalle: resFactura };
    registrarFin("Generar Factura Electrónica", resFactura);

    // Esperar a que la tarea opcional termine antes de retornar el informe final
    await promesaRecomendaciones;

    return {
      exitoGeneral: true,
      facturaGenerada: `FACTURA-ELECTRONICA-${pedidoId}-OK`,
      resultados,
      flujoEjecucion
    };

  } catch (errorPasoObligatorio) {
    // Si falla un paso obligatorio, se captura aquí y no se genera la factura
    return {
      exitoGeneral: false,
      errorSistema: errorPasoObligatorio,
      facturaGenerada: null,
      resultados,
      flujoEjecucion
    };
  }
};