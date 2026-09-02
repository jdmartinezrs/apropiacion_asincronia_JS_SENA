A. Actividades de apropiación del conocimiento.

En esta etapa pasamos a consolidar lo aprendido mediante ejercicios prácticos que nos
permitirán observar directamente cómo funciona la asincronía en JavaScript. A través de
situaciones que implican tiempos de espera, respuestas diferidas y procesos que se
ejecutan en paralelo, iremos aplicando callbacks, promesas y async/await para
comprender su utilidad en el desarrollo de aplicaciones reales.

El propósito es fortalecer la comprensión por medio de la experimentación, el análisis y la
interacción constante. Trabajaremos de manera guiada, aclarando dudas, promoviendo el
razonamiento lógico y reconociendo buenas prácticas en la implementación de código
asincrónico. Este momento nos permitirá afianzar las bases necesarias para enfrentar
desafíos técnicos con mayor seguridad y dominio del lenguaje.

GFPI-F-135 V04

Actividades Prácticas:

1. Explorando la asincronía básica
Ejercicio:
Escribe un código que imprima “Inicio”, luego una operación con setTimeout que tarde 2 segundos
y finalmente “Fin”.
Meta: que reconozcan el orden real de ejecución.
2. Identificando código bloqueante
Ejercicio:
Crea un ciclo muy grande (por ejemplo, uno que cuente hasta millones) y observa cómo afecta la
ejecución del programa.
Meta: evidenciar cómo una tarea pesada bloquea el hilo principal.
3. Manejo de asincronía con Callbacks
Ejercicio:
Crear una función llamada procesarPedido que simule un pedido de comida con un setTimeout de
3 segundos y que reciba un callback para mostrar un mensaje final, por ejemplo: “Pedido
entregado”.
Meta: comprender la ejecución diferida.
4. Encadenamiento de Callbacks (Callback Hell controlado)
Ejercicio:
Crear tres procesos consecutivos (por ejemplo: tomar datos → procesar datos → mostrar
resultado), cada uno con un setTimeout, y enlazarlos mediante callbacks.
Meta: mostrar la complejidad que aparece cuando las tareas dependen unas de otras.

5. Transformando Callbacks en Promesas
Ejercicio:
Convertir el ejercicio anterior en una estructura basada en Promesas con .then().
Meta: visualizar cómo mejora la legibilidad.

GFPI-F-135 V04

6. Manejo de errores con Promesas
Ejercicio:
Crear una promesa que simule un proceso que puede fallar 50% de las veces usando resolve y
reject.
Meta: entender .catch() y la importancia del manejo de errores.

7. Uso de Async/Await
Ejercicio:
Crear una función async que espere una promesa de 2 segundos y luego muestre el resultado.
Meta: comprender cómo await pausa la ejecución sin bloquear el hilo.

8. Comparación práctica final

Ejercicio integrador 1:
Simular un proceso de “consulta de usuario”, que requiere:
1. “Buscar usuario” (promesa de 1 segundo)
2. “Consultar permisos” (promesa de 2 segundos)
3. “Generar reporte final” (promesa de 1 segundo)
Realizarlo en tres versiones:
• Con callbacks
• Con promesas
• Con async/await
Meta: identificar ventajas y desventajas reales de cada técnica.
Ejercicio integrador 2:
Centro de Procesamiento de Órdenes
Vamos a simular un centro que procesa órdenes de forma asincrónica. Cada orden
requiere pasar por varios pasos: verificación, procesamiento, registro y notificación.
Algunos pasos tardan más tiempo que otros y debemos garantizar que el sistema no se

GFPI-F-135 V04

bloquee. Usaremos callbacks, promesas y async/await dentro del mismo ejercicio para
comparar cómo evoluciona el flujo.
Este ejercicio exige analizar: tiempos, dependencias, orden de ejecución y estructura del
código.
Requerimientos del programa
Datos de entrada
• Una lista de órdenes en un arreglo, por ejemplo:
const ordenes = [
{ id: 1, cliente: "Ana", monto: 120000 },
{ id: 2, cliente: "Luis", monto: 80000 },
{ id: 3, cliente: "María", monto: 150000 }
];
• Tiempos simulados de los procesos:
• Verificación: 1500 ms
• Procesamiento: 2000 ms
• Registro: 1000 ms
• Notificación: 500 ms
Datos de salida esperados
• Mensajes con marcas de tiempo que permitan determinar:
o Duración total del proceso por orden
o Orden de ejecución real
o Identificación de procesos paralelos y procesos secuenciales
• Un reporte final indicando qué órdenes se completaron y en qué tiempos.
Tareas
1. Primera parte (Callbacks):
o Implementar el flujo completo de una sola orden usando callbacks.
o Analizar el tiempo total.
o Identificar visualmente el “callback hell” y documentarlo.
2. Segunda parte (Promesas + then):

GFPI-F-135 V04
o Reescribir el mismo proceso usando promesas.
o Validar si la estructura se vuelve más clara.
o Registrar tiempos.
3. Tercera parte (Async/Await):
o Implementar el procesamiento de todas las órdenes con async/await.
o Procesarlas en serie (una detrás de otra).
o Luego procesarlas en paralelo (todas a la vez).
o Comparar tiempos y justificar la diferencia.

Objetivos de análisis
Se requiere analizar los siguientes puntos:
• Explicar por qué la versión sincrónica (si existiera) bloquearía todo.
• Identificar qué tareas sí pueden correr en paralelo y justificarlas.
• Comparar los tiempos reales vs. los tiempos teóricos.
• Explicar cómo el event loop ordena la ejecución.
• Reconocer cuándo usar callbacks, promesas o async/await para problemas reales.

Ejercicio integrador 3:
Simulador de Consulta de Usuarios y Roles
Descripción general
Vamos a simular una aplicación que debe consultar información desde diferentes fuentes:
• Datos básicos del usuario
• Información de seguridad
• Roles y permisos
Algunas consultas son lentas y otras rápidas. El propósito es reconstruir el flujo completo,
validar que la aplicación no se bloquee y comprender el orden real de los resultados.
Requerimientos del programa
Datos de entrada
• Un arreglo de IDs de usuarios:
const usuarios = [101, 102, 103, 104];
• Tiempos simulados:

GFPI-F-135 V04

• Consulta de usuario: 1200 ms
• Consulta de seguridad: 800 ms
• Consulta de roles: 2000 ms
• Registro final: 600 ms
Datos de salida esperados
• Para cada usuario, se debe generar un objeto como este:
{
id: 101,
nombre: "Usuario 101",
seguridad: "OK",
roles: ["admin", "ventas"],
tiempoTotal: "3.2 segundos"
}
• Registro final de la operación:
• Tiempo total del grupo
• Usuarios consultados en paralelo
• Identificación de cuellos de botella
Tarea
1. Construir una versión bloqueante (solo de demostración):
o Usar un ciclo que simule operaciones largas.
o Observar cómo el programa se congela.
o Documentar por qué no sirve este enfoque.
2. Versión asincrónica con Promesas:
o Consultar usuario → consultar seguridad → consultar roles → registrar.
o Este flujo debe ejecutarse de forma secuencial para cada usuario, pero en paralelo
entre usuarios.

3. Versión final con Async/Await:
o Implementar la misma lógica usando async/await.
o Registrar tiempos reales con Date.now().
o Contrastar con la ejecución basada en promesas.

GFPI-F-135 V04

Materiales de formación:
• Planteamiento de los ejercicios
• Pc
• Navegador
• Visual estudio code
Estrategias didácticas activas:
• Acompañamiento individual
• Resolución progresiva
• Aprendizaje por descubrimiento
• Debate técnico breve
• Retroalimentación continua
Evidencias de aprendizaje:
• Codigo fuente con repositorio
