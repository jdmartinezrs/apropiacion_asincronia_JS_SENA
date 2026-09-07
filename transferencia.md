B. Actividades de transferencia del conocimiento.
En este momento pasamos a la práctica aplicada, donde consolidamos todo lo aprendido
sobre asincronía en JavaScript. Aquí buscamos que los aprendices enfrenten situaciones
que exigen analizar flujos de ejecución, interpretar tiempos de respuesta, validar datos y
tomar decisiones técnicas basadas en comprensión profunda del comportamiento
asincrónico del lenguaje.
Mi propósito en este espacio es guiar el proceso sin intervenir más de lo necesario,
permitiendo que cada aprendiz explore, pruebe, falle, ajuste y finalmente logre una
solución coherente. Esta práctica es el puente directo entre la teoría y los retos reales del

GFPI-F-135 V04

desarrollo de software, y nos prepara para enfrentar procesos asincrónicos con seguridad,
criterio y orden lógico.
Actividades de aprendizaje:
Ejercicios Prácticos
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
2. Entrega de paquetes con tiempos variables

GFPI-F-135 V04

Enunciado
Una empresa de mensajería tiene varios paquetes para entregar. Cada entrega tarda un
tiempo distinto y el sistema debe ejecutar todas las entregas en paralelo. Al final debe
mostrar cuáles paquetes se entregaron primero y consolidar un resumen final.
Requerimientos
• Ejecutar entregas de forma simultánea.
• Registrar orden real de finalización.
• Mostrar errores si alguna entrega falla.
• Consolidar un informe final.
Datos de entrada
• Lista de paquetes (ID + tiempo estimado de entrega).
Datos de salida
• Resultado de cada entrega.
• Orden en que finalizó cada una.
• Informe final consolidado.
3. Validación de un formulario con múltiples verificaciones externas
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
4. Procesamiento de pedidos con pasos obligatorios y opcionales
Enunciado
Un sistema de ventas debe procesar pedidos en el siguiente flujo:
1. Validar stock (obligatorio).
2. Calcular costos finales (obligatorio).
3. Generar recomendaciones al cliente (opcional).
4. Enviar factura electrónica (obligatorio, pero depende de los dos primeros pasos).

GFPI-F-135 V04

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
5. Integración de servicios: disponibilidad, datos del usuario, historial y
recomendaciones
Enunciado
Un sistema central debe preparar la información de un usuario consultando cuatro
servicios externos:
1. Servicio A: disponibilidad de un recurso.
2. Servicio B: información detallada del usuario.
3. Servicio C: historial de acciones.

GFPI-F-135 V04

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

• Resultado de cada servicio.
• Informe central detallado.
• Orden real de finalización.
• Estado general del sistema (“Integración exitosa” o error general).
Materiales de formación:
• Editor de código (VS Code)
• Navegador web con herramientas de inspección
• Repositorio de Git

GFPI-F-135 V04

Estrategias didácticas activas:
• Resolución de problemas prácticos.
• Aprendizaje basado en casos (ABP)
• Pensamiento algorítmico
• Socialización técnica
• Trabajo autónomo con retroalimentación del instructor.
• Uso de GitHub como portafolio de evidencias.
Evidencias de aprendizaje:
• La solución de los ejercicios en archivos separados
• Comentarios en el código explicando el uso de condicionales.
• Registro de commits claros en GitHub.
• Comentarios de los análisis requeridos