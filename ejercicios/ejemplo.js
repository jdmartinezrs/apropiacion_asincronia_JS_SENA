/**1. Explorando la asincronía básica
Ejercicio:
Escribe un código que imprima “Inicio”, luego una operación con setTimeout que tarde 2 segundos
y finalmente “Fin”.
Meta: que reconozcan el orden real de ejecución. */

export const explorandoAsincronia =()=>{
  console.log("Inicio")
  setTimeout (()=>{
    console.log("Fin")
  },2000);
}

/**
 * 2. Identificando código bloqueante
Ejercicio:
Crea un ciclo muy grande (por ejemplo, uno que cuente hasta millones) y observa cómo afecta la
ejecución del programa.
Meta: evidenciar cómo una tarea pesada bloquea el hilo principal.
 */
export const cicloMuyGrande =(cantidad)=>{
  for(let i =0; i<cantidad; i++){
  }
    console.log("Terminado")
}

/**
 * 4. Encadenamiento de Callbacks (Callback Hell controlado)
Ejercicio:
Crear tres procesos consecutivos (por ejemplo: tomar datos → procesar datos → mostrar
resultado), cada uno con un setTimeout, y enlazarlos mediante callbacks.
Meta: mostrar la complejidad que aparece cuando las tareas dependen unas de otras.

 */

export const crearCita=(cita, funcionParaLlamar)=>{
  let miCita = "Como yo siempre digo, " + cita;
  funcionParaLlamar(miCita);
}

export const logCita=(cita)=>{
  console.log(cita);
}

/**Ejemplo solicitud Servidor solo tiene  */
export const solicitudServidor = (consulta, callback)=>{
setTimeout(()=>{
  let respuesta = consulta + "lleno!"
  callback(respuesta);
},5000)
}

export const obtenerResultados=(resultados)=>{
  console.log("Respuesta del servidor: " + resultados);
}


/**Crear tres procesos consecutivos: */

// Tomar datos

export const tomarDatos = (callback) => {
  setTimeout(()=> {
    let datos = "Datos del servidor";
    callback(datos);
  },2000);
}

//2. Procesar datos

export const procesarDatos = (datos, callback) =>{
  setTimeout(()=> {
    let resultado = datos + "procesados";
    callback(resultado);
  }, 2000);
}

// 3. Mostrar Resultado
export const mostrarResultado = (resultado) =>{
  setTimeout(()=>{
    console.log("Resultado final: " + resultado);
  }, 2000);
};