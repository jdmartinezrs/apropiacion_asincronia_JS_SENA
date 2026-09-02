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
/*
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
/*
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
}
*/
/**
 * 
 * 5. Transformando Callbacks en Promesas
Ejercicio:
Convertir el ejercicio anterior en una estructura basada en Promesas con .then().
Meta: visualizar cómo mejora la legibilidad.
 */

export const solicitudServidor = (consulta) => {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      let respuesta = consulta + "recibido correctamente";
      resolve(respuesta);
    },5000);
  });
};

// 2. Procesar datos

export const procesarDatos = (datos) => {
  return new Promise ((resolve, reject) =>{
    setTimeout(()=>{
      let resultado = datos + " y procesado con éxito";
      resolve(resultado);
    }, 5000);
  });
};

// Mostrar Resultado 

export const obtenerResultados = (resultados)=> {
  console.log("PROMESA → Resultado obtenido: " + resultados)
}

/**
6. Manejo de errores con Promesas
Ejercicio:
Crear una promesa que simule un proceso que puede fallar 50% de las veces usando resolve y
reject.
Meta: entender .catch() y la importancia del manejo de errores.
 */

export const manejoErroresPromesas = () => {
  return new Promise((resolve, reject) => {
    const num = Math.random();
    if (num >= 0.5) {
      resolve("promesa cumplida");
    } else {
      reject("promesa rechazada");
    }
  });
};


